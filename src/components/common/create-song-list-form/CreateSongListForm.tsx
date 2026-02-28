import React, { useState, useEffect } from "react";
import "./create-song-list-form.css";

import { useSearch } from "../../../hooks/useSearch";
import { SearchService } from "../../../services/songSearchService";
import type { Song } from "../../../types/songModel";
import type { SongList, VisibilityOption } from "../../../types/songListTypes";

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

  const {
    searchValue,
    setSearchValue,
    debouncedValue,
    isFocused,
    setIsFocused,
    clearSearch,
  } = useSearch({ debounceMilliseconds: 300 });

  const [searchResults, setSearchResults] = useState<Song[]>([]);

  // Update search results whenever the debounced search value changes
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      return;
    }

    const results = SearchService.searchSongs(debouncedValue);
    setSearchResults(results);
  }, [debouncedValue]);

  // Add song from search results to the list
 const addSongFromSearch = (song: Song) => {
    setSongs((previousSongs) => [
      ...previousSongs, song]);
    clearSearch();
    setSearchResults([]);
  };

  const removeSong = (id: number) => {
    setSongs((previousSongs) => previousSongs.filter((song) => song.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {
      name?: string;
      songs?: string;
    } = {};

    if (name.trim() === "") {
      newErrors.name = "**List name is required.**";
    }

    if (songs.length === 0) {
      newErrors.songs = "**Please add at least one song.**";
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

        <div className="song-search-container">
          <label className="form-field">
            Search for a song
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="Type a title or artist name..."
            />
          </label>

          {isFocused && searchResults.length > 0 && (
            <ul className="search-results-dropdown">
              {searchResults.map((song) => (
                <li
                  key={song.id}
                  className="search-result-item"
                  onClick={() => addSongFromSearch(song)}
                >
                  <strong>{song.title}</strong> — {song.artist.join(", ")}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="songs-section">
          <h3>Songs</h3>

          {errors.songs && <p className="error-text">{errors.songs}</p>}

          {songs.map((song) => (
            <div key={song.id} className="song-list-item">
              <div className="song-row">
                <p><strong>{song.title}</strong></p>
                <p>{song.artist.join(", ")}</p>

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
        </div>

        <button type="submit" className="submit-button">
          Create List
        </button>
      </form>
    </div>
  );
};