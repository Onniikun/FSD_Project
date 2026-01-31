import type { MoodSelectorProps } from "../../../types/mood";
import './mood-selector.css';

export function MoodSelector({ mood, setMood, showButtons = false, message }: MoodSelectorProps) {
  const moods = ["Chill", "Hyped", "Focused", "Sad", "Nostalgic", "Energetic"];

  const displayMessage =
    message ||
    (mood
      ? `You're feeling ${mood} at the moment`
      : "Select your mood to get started");


  return (
    <div className="mood-selector">
      <p className="mood-message">{displayMessage}</p>
      {showButtons && (
        <div className="mood-buttons">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`mood-button ${m === mood ? "active" : ""}`}
            >
              {m}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};