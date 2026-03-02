import React, { useState } from "react";
import "./create-song-list-form.css";

import { useFormField } from "../../../hooks/useFormField";
// file will be impl. after, messed up and been working on 1 branch for too long
import * as DiscoveryService from "../../../services/discoveryService";
import * as SongListService from "../../../services/SongListService";
import { fetchAllSongs } from "../../../apis/SongItemRepo";
import type { Song, SongList, VisibilityOption } from "../../../types/songListTypes";

interface CreateSongListFormProps {
  setLists: React.Dispatch<React.SetStateAction<SongList[]>>;
}

export default function CreateSongListForm({ setLists }: CreateSongListFormProps) {
  const nameField = useFormField("", DiscoveryService.validateListName);
  const [visibility, setVisibility] = useState<VisibilityOption>("private");
  const descField = useFormField("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [errors, setErrors] = useState<{
    name?: string;
    songs?: string;
  }>({});


  const addSong = () => {
    setSongs((previousSongs) => [
      ...previousSongs,
      { id: crypto.randomUUID(), title: "", artist: "" },
    ]);
  };

  const updateSong = (id: string, field: keyof Song, value: string) => {
    setSongs((previousSongs) =>
      previousSongs.map((song) =>
        song.id === id ? { ...song, [field]: value } : song
      )
    );
  };

  const removeSong = (id: string) => {
    setSongs((previousSongs) => previousSongs.filter((song) => song.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const nameOk = nameField.validateNow();

    const listErrors = SongListService.validateList({
      id: "temp",
      name: nameField.value,
      visibility,
      description: descField.value,
      songs,
    });

    setErrors({ songs: listErrors.songs });

    if (!nameOk || listErrors.songs) return;

    const newList: SongList = {
      id: crypto.randomUUID(),
      name: nameField.value,
      visibility,
      description: descField.value,
      songs,
    };

    setLists((previousLists) => [...previousLists, newList]);
    nameField.reset();
    descField.reset();
    setVisibility("private");
    setSongs([]);
  };

  return (
    <div className="songlist-container">
      <form className="songlist-form" onSubmit={handleSubmit}>
        <h2>Create a New Song List</h2>

        <label className="form-field">
          List Name
          <input
            type="text"
            value={nameField.value}
            onChange={(e) => nameField.onChange(e.target.value)}
            onBlur={nameField.onBlur}
          />
          {nameField.touched && nameField.errors[0] && (
            <p className="error-text">{nameField.errors[0]}</p>)}
        </label>

        <label className="form-field">
          Who can view this list?
          <select
            value={visibility}
            onChange={(e) =>
              setVisibility(e.target.value as VisibilityOption)
            }
          >
            <option value="private">Only Me</option>
            <option value="public">Public</option>
          </select>
        </label>

        <label className="form-field">
          Description
          <textarea
            value={descField.value}
            onChange={(e) => descField.onChange(e.target.value)}
            onBlur={descField.onBlur}
            rows={3}
          />
        </label>

        <div className="songs-section">
          <h3>Songs</h3>

          {errors.songs && <p className="error-text">{errors.songs}</p>}

          {songs.map((song) => (
            <div key={song.id} className="song-list-item">
              <div className="song-row">

                <label className="song-field">
                  Title
                  <input
                    type="text"
                    value={song.title}
                    onChange={(e) =>
                      updateSong(song.id, "title", e.target.value)
                    }
                  />
                </label>

                <label className="song-field">
                  Artist
                  <input
                    type="text"
                    value={song.artist}
                    onChange={(e) =>
                      updateSong(song.id, "artist", e.target.value)
                    }
                  />
                </label>
              
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeSong(song.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button type="button" className="add-button" onClick={addSong}>
            + Add Song
          </button>
        </div>

        <button type="submit" className="submit-button">
          Create List
        </button>
      </form>
    </div>
  );
};