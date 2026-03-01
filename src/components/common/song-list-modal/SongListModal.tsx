import { useState, useEffect } from "react";
import "./song-list-modal.css";
import type { Song } from "../../../types/songModel";
import type { SongList } from "../../../types/songListTypes";
import defaultCover from "../../../assets/default-cover.png";
import { SearchService } from "../../../services/songSearchService";
import { addSong as addSongToList, removeSong as removeSongFromList } from "../../../services/SongListService";


export function SongListModal({
  list,
  onClose,
  onDelete,
  onEdit
}: {
  list: SongList;
  onClose: () => void;
  onDelete: (id: string) => void;
  onEdit: (updated: SongList) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Local editable fields
  const [name, setName] = useState(list.name);
  const [description, setDescription] = useState(list.description);
  const [visibility, setVisibility] = useState(list.visibility);
  const [cover, setCover] = useState<string | undefined>(list.cover);
  const [songs, setSongs] = useState(list.songs);

  // Search state
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  // Search effect
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }
    setSearchResults(SearchService.searchSongs(searchValue));
  }, [searchValue]);

  const addSong = (song: Song) => {
    setSongs(prev => addSongToList(prev, song));
    setSearchValue("");
    setSearchResults([]);
  };

  const removeSong = (id: number) => {
    setSongs(prev => removeSongFromList(id, prev));
  };

  const handleSave = () => {
    onEdit({
      ...list,
      name,
      description,
      visibility,
      cover
    });
    setIsEditing(false);
  };

  return (
    <div className="modal-overlay">
      <div className={`modal ${isEditing ? "modal-edit" : "modal-view"}`}>
        <button className="close-btn" onClick={onClose}>×</button>

        {!isEditing && (
          <>
            <img 
              src={list.cover ?? defaultCover} 
              className="modal-cover" 
              alt={`${list.name} cover image`}
            />

            <h2 className="modal-title-view">{list.name}</h2>
            <p className="modal-description">{list.description}</p>
            <p><strong>Visibility:</strong> {list.visibility}</p>

            <h3>Songs</h3>
            <ul>
              {list.songs.map(song => (
                <li key={song.id}>
                  {song.title} — {song.artist.join(", ")}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onDelete(list.id)}>Delete</button>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <h2>Edit List</h2>

            <div className="cover-edit-section">
              <img
                src={cover ?? defaultCover}
                alt="Cover preview"
                className="modal-cover editable-cover"
                onClick={() => document.getElementById("edit-cover-input")?.click()}
              />

              <input
                id="edit-cover-input"
                type="file"
                accept="image/*"
                className="hidden-file-input"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  const reader = new FileReader();
                  reader.onload = () => setCover(reader.result as string);
                  reader.readAsDataURL(file);
                }}
              />
            </div>

            <div className="modal-form">
              <label>
                Name
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>

              <label>
                Description
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </label>

              <label>
                Visibility
                <select
                  value={visibility}
                  onChange={e => setVisibility(e.target.value as "public" | "private")}
                >
                  <option value="public">Public</option>
                  <option value="private">Only Me</option>
                </select>
              </label>

              <div className="song-search-container">
                <label>
                  Add Song
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    placeholder="Search songs..."
                  />
                </label>

                {isFocused && searchResults.length > 0 && (
                  <ul className="search-results-dropdown">
                    {searchResults.map(song => (
                      <li
                        key={song.id}
                        className="search-result-item"
                        onClick={() => addSong(song)}
                      >
                        <span>{song.title}</span>
                        <span>{song.artist.join(", ")}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <h3>Songs</h3>
              <ul className="edit-songs-list">
                {songs.map(song => (
                  <li key={song.id} className="edit-song-row">
                    <span>{song.title} — {song.artist.join(", ")}</span>
                    <button
                      type="button"
                      className="remove-song-btn"
                      onClick={() => removeSong(song.id)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}