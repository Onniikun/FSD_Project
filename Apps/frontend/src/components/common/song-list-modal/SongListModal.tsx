import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./song-list-modal.css";
import type { SongItemSchema } from "../../../../../../shared/types/SongItemSchema";
import type { SongList } from "../../../../../../shared/types/songListTypes";
import defaultCover from "../../../assets/default-cover.png";
import { SearchService } from "../../../services/songSearchService";
import { validateList, addSong as addSongToList, removeSong as removeSongFromList } from "../../../services/SongListService";

/**
 * A modal component for viewing and editing a song list, allowing users to see details, edit information, search/add songs, and delete the list.
 * @param list - The song list being displayed or edited.
 * @param onClose - Closes the modal.
 * @param onDelete - Deletes the list by ID.
 * @param onEdit - Saves updates to the list.
 * @returns The rendered SongListModal component.
 */
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
  const [errors, setErrors] = useState<{
    name?: string;
    songs?: string;
  }>({});

  // Search state
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SongItemSchema[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  // Search effect
  useEffect(() => {
    async function fetchResults() {
      if (!searchValue.trim()) {
        setSearchResults([]);
        return;
      }
      const results = await SearchService.searchSongs(searchValue);
      setSearchResults(results);
    }
    fetchResults();
  }, [searchValue]);

  const addSong = (song: SongItemSchema) => {
    setSongs(prev => addSongToList(prev, song));
    setSearchValue("");
    setSearchResults([]);

    if (errors.songs) setErrors(prev => ({ ...prev, songs: undefined }));
  };

  const removeSong = (id: number) => {
    setSongs(prev => {
      const updated  = removeSongFromList(id, prev);
      if (updated.length === 0) {
        setErrors(prev => ({ ...prev, songs: "**Please add at least one song.**" }));
      }
      return updated ;
    });
  };

  const handleSave = () => {
    const input = {
      name,
      description,
      visibility,
      songs,
      cover
    };

    const validationErrors = validateList(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    onEdit({
      ...list,
      name,
      description,
      visibility,
      cover,
      songs
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
                <li 
                  key={song.id}
                  className="song-link"
                  onClick={() => navigate(`/songs/${song.id}`)}
                >
                  {song.title} — {song.artist.join(", ")}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => {
                  const ok = window.confirm("Are you sure you want to delete this list?");
                  if (ok) onDelete(list.id);
                }}
              >
                Delete  
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <h2>Edit List</h2>

            <div className="cover-edit-section">
              <label htmlFor="edit-cover-input" className="editable-cover-label">
                <img
                  src={cover ?? defaultCover}
                  alt="Cover preview"
                  className="modal-cover editable-cover"
                />
              </label>

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
                  onChange={e => {
                    setName(e.target.value);
                    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                  }}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </label>

              <label>
                Description
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={7}
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

              {errors.songs && <p className="error-text">{errors.songs}</p>}

              <ul className="edit-songs-list">
                {songs.map(song => (
                  <li 
                    key={song.id} 
                    className="edit-song-row song-link"
                    onClick={() => navigate(`/songs/${song.id}`)}
                  >
                    <span>{song.title} — {song.artist.join(", ")}</span>
                    <button
                      type="button"
                      className="remove-song-btn"
                        onClick={(e) => {
                        e.stopPropagation();
                        removeSong(song.id);
                      }}
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