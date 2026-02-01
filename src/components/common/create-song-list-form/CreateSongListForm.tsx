import React, { useState } from "react";
import './CreateSongListForm.css';

import type { Song, SongList, VisibilityOption } from "../../../types/songListTypes";

interface CreateSongListFormProps {
  setLists: React.Dispatch<React.SetStateAction<SongList[]>>;
}

export default function CreateSongListForm({ setLists }: CreateSongListFormProps) {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState<VisibilityOption>("private");
  const [description, setDescription] = useState("");
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
    e.preventDefault();
    const newErrors: {
      name?: string;
      songs?: string;
    } = {};

    if (name.trim() === "") {
      newErrors.name = "List name is required.";
    }

    if (songs.length === 0) {
      newErrors.songs = "Please add at least one song.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newList: SongList = {
      id: crypto.randomUUID(),
      name,
      visibility,
      description,
      songs,
    };

    setLists((previousList) => [...previousList, newList]);

    // Reset form fields after submission
    setName("");
    setVisibility("private");
    setDescription("");
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </label>

        <div className="songs-section">
          <h3>Songs</h3>

          {errors.songs && <p className="error-text">{errors.songs}</p>}

          {songs.map((song) => (
            <div key={song.id} className="song-item">
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