import type { SongItemSchema } from "../../../../shared/types/SongItemSchema";

export type SortOption = "title-asc" | "newest" | "oldest";

/**
 * - Rules for what makes a search valid
 * - Rules for how to filter songs (query / genre / mood)
 * - Rules for sorting
 */
export function validateSearchQuery(query: string): string[] {
  const errors: string[] = [];
  if (query.trim().length < 2) {
    errors.push("Search must be at least 2 characters.");
  }
  return errors;
}

export function validateListName(name: string): string[] {
  const errors: string[] = [];
  if (!name.trim()) errors.push("List name is required.");
  if (name.trim().length > 40) errors.push("List name must be 40 characters or less.");
  return errors;
}

function normalize(str: string): string {
  return str.toLowerCase().trim();
}

export function matchesQuery(song: SongItemSchema, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;

  const title = normalize(song.title);
  const artists = song.artist.map(normalize).join(" ");
  const genres = song.genre.map(normalize).join(" ");

  return title.includes(q) || artists.includes(q) || genres.includes(q);
}

/**
 * Mood -> genre mapping is mostly subjective, but we can hardcode something simple for now, will definitely change ltr
 * Keep it simple for Sprint 3; you can adjust later.
 */
export function matchesMood(song: SongItemSchema, mood: string | null | undefined): boolean {
  if (!mood) return true;

  const m = normalize(mood);
  const genres = song.genre.map(normalize);

  const moodMap: Record<string, string[]> = {
    chill: ["soft", "jazz", "r&b"],
    focused: ["jazz", "soft"],
    sad: ["soft", "dark r&b"],
    nostalgic: ["r&b", "j-pop", "k-pop"],
    hyped: ["k-pop", "j-pop", "dark r&b"],
    energetic: ["k-pop", "dark r&b", "r&b"],
  };

  const allowed = moodMap[m] ?? [];
  if (allowed.length === 0) return true;

  return genres.some(g => allowed.includes(g));
}

export function matchesGenre(song: SongItemSchema, genre: string): boolean {
  if (!genre || genre === "All") return true;
  const g = normalize(genre);
  return song.genre.map(normalize).some(x => x === g);
}

export function sortSongs(songs: SongItemSchema[], option: SortOption): SongItemSchema[] {
  const copy = [...songs];

  if (option === "title-asc") {
    // localeCompare documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    copy.sort((a, b) => a.title.localeCompare(b.title));
  } else if (option === "newest") {
    copy.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime());
  } else if (option === "oldest") {
    copy.sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime());
  }

  return copy;
}

export function applyDiscovery(
    songs: SongItemSchema[],
    args: {
    query?: string;
    mood?: string | null;
    genre?: string;
    sort?: SortOption;
  }
): SongItemSchema[] {
  const filtered = songs
    .filter(s => matchesQuery(s, args.query ?? ""))
    .filter(s => matchesMood(s, args.mood))
    .filter(s => matchesGenre(s, args.genre ?? "All"));

  return sortSongs(filtered, args.sort ?? "title-asc");
}