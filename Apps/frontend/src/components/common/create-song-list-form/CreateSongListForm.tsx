import React, { useState, useEffect } from "react";
import "./create-song-list-form.css";

import type { Song } from "../../../types/songModel";
import type { CreateSongListData, VisibilityOption } from "../../../../../../shared/types/songListTypes";
import defaultCover from "../../../assets/default-cover.png";
import { useSearch } from "../../../hooks/useSearch";
import { SearchService } from "../../../services/songSearchService";
import {
  validateList,
  addSong as addSongToList,
  removeSong as removeSongFromList,
} from "../../../services/SongListService";

interface CreateSongListFormProps {
  onCreateList: (data: CreateSongListData) => Promise<void>;
}

/**
 * A form component for creating a new song list, allowing users to input details and search/add songs.
 * @param onCreateList - Callback function to handle the creation of a new song list with the provided data.
 * @returns The rendered CreateSongListForm component.
 */
export default function CreateSongListForm({ onCreateList  }: CreateSongListFormProps) {
  const [name, setName] = useState("");
  const [visibility, setVisibility] = useState<VisibilityOption>("private");
  const [description, setDescription] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [cover, setCover] = useState<string | undefined>(undefined);
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
    async function fetchResults() {
      if (!debouncedValue.trim()) {
        setSearchResults([]);
        return;
      }
      const results = SearchService.searchSongs(debouncedValue);
      setSearchResults(results);
    }
    fetchResults();
  }, [debouncedValue]);

  // Add song from search results to the list
  const addSongFromSearch = (song: Song) => {
    setSongs(previousSongs => 
      addSongToList(previousSongs, song));
    clearSearch();
    setSearchResults([]);

    // Clear the error message
    setErrors(prevErrors => ({ ...prevErrors, songs: undefined }));
  };

  const removeSong = (id: number) => {
    setSongs((previousSongs) => {
      const updatedSongs = removeSongFromList(id, previousSongs);

      // Make error message reappear if user removes all songs
      if (updatedSongs.length === 0) {
        setErrors(prevErrors => ({ ...prevErrors, songs: "**Please add at least one song.**" }));
      }

      return updatedSongs;
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = {
      name,
      visibility,
      description,
      songs,
      cover,
    };

    const validationErrors = validateList(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    await onCreateList({
      name,
      visibility,
      description,
      songIds: songs.map(song => song.id),
      cover,
    });

    // Reset form fields after submission
    setName("");
    setVisibility("private");
    setDescription("");
    setSongs([]);
    setCover(undefined);
  };

  return (
    <div className="songlist-container">
      <form className="songlist-form" onSubmit={handleSubmit}>
        <h2>Create a New Song List</h2>

        <div className="cover-upload-section">
          <img
            src={cover ?? defaultCover}
            alt="Cover preview"
            className="cover-preview"
          />

          <label htmlFor="cover-upload" className="cover-overlay">
              <span className="edit-icon">✏️</span>
              <span className="overlay-text">Change Cover</span>

            <input
              type="file"
              accept="image/*"
              className="cover-input"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = () => setCover(reader.result as string);
                reader.readAsDataURL(file);
              }}
            />
          </label>
        </div>

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
            rows={7}
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
                  <span className="song-title">{song.title}</span>
                  <span className="song-artists">{song.artist.join(", ")}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="songs-section">
          <h3>Songs</h3>

          {errors.songs && <p className="error-text">{errors.songs}</p>}

          {songs.map((song) => (
            <div key={song.id} className="song-row">
              <div className="song-details">
                <p><strong>{song.title}</strong></p>
                <p>{song.artist.join(", ")}</p>
              </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeSong(song.id)}
                >
                  X
                </button>
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