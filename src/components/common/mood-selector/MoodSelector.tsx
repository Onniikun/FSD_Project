import type { Mood } from "../../../types/mood";

export function MoodSelector({ mood, setMood }: Mood) {
  const moods = ["Chill", "Hyped", "Focused", "Sad", "Nostalgic", "Energetic"];

  return (
    <div className="mood-selector">
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
  );
};