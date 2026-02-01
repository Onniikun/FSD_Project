import React, { useState } from "react";

import type { Song, SongList, VisibilityOption } from "../../../types/songListTypes";

interface CreateSongListFormProps {
  setLists: React.Dispatch<React.SetStateAction<SongList[]>>;
}

export default function CreateSongListForm({ setLists }: CreateSongListFormProps) {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState<VisibilityOption>("private");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);

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
            required
          />
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

          {songs.map((song) => (
            <div key={song.id} className="song-item">
              <label>
                Title
                <input
                  type="text"
                  value={song.title}
                  onChange={(e) =>
                    updateSong(song.id, "title", e.target.value)
                  }
                  required
                />
              </label>

              <label>
                Artist
                <input
                  type="text"
                  value={song.artist}
                  onChange={(e) =>
                    updateSong(song.id, "artist", e.target.value)
                  }
                  required
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