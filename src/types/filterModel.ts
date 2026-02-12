export type GenreType = "All" | "R&B" | "Dark R&B" | "K-Pop"

export interface filter {
    genres: GenreType[],
    selectedGenre: GenreType;
    setSelectedGenre: (genre: GenreType) => void;
}

export interface genreFilter {
    selectedGenre: string,
    setSelectedGenre: React.Dispatch<React.SetStateAction<string>>
}