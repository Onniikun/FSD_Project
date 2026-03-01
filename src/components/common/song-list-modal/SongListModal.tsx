import { useState } from "react";
import "./song-list-modal.css";
import type { SongList } from "../../../types/songListTypes";
import defaultCover from "../../../assets/default-cover.png";

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

  const handleSave = () => {
    onEdit({
      ...list,
      name,
      description,
      visibility
    });
    setIsEditing(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>

        {!isEditing && (
          <>
            <img 
              src={list.cover ?? defaultCover} 
              className="modal-cover" 
              alt={`${list.name} cover image`}
            />

            <h2>{list.name}</h2>
            <p>{list.description}</p>
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