import { useState } from "react"
import type { GenreType, filter } from "../../types/filterModel"


/**
 * 
 * @param initialGenre 
 * @returns 
 */
export function useGenreFilter(
    //Start with Initial value
    initialGenre: GenreType= "All"
): filter {
    // List of values(genres)
    const genres: GenreType[] = ["All", "R&B", "Dark R&B", "K-Pop"]
    const [selectedGenre, setSelectedGenre] = useState<GenreType>(initialGenre)

    //Handles selected genre to be displayed
    const handleGenreChange = (genre: GenreType) => {
        setSelectedGenre(genre)
    }

    return{
        genres,
        selectedGenre,
        setSelectedGenre: handleGenreChange
    }
}