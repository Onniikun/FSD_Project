import { useSortFilter } from "../../../hooks/useSortAndFilterUI"
import "./genre-filter.css"

type GenreFilterProps = {
    onChange?: (genre: string) => void
};
/**
 * Filters songs by Genre.
 * @param onChange - Callback when the genre display is changed.
 * @returns - Filtered song.
 */
function GenreFilter({ onChange }: GenreFilterProps) {
    const genres = ["All", "R&B", "Dark R&B", "K-Pop"];

    const { 
        selectedItem: selectedGenre, 
        setSelectedItem: setSelectedGenre
    } = useSortFilter("All")

    const handleGenreChange = (genre: string) => {
        setSelectedGenre(genre)
        onChange?.(genre)
    }

    return (
        <section className="genre-filter">
            {genres.map((genre) =>(
                //https://react.dev/learn/rendering-lists
                <button 
                  key={genre} 
                  type="button"
                  className={ selectedGenre === genre 
                    ? "genre-btn active" 
                    : "genre-btn"
                }
                onClick={() => handleGenreChange(genre)}>
                {genre}
            </button>
            ))}
        </section>
    )
}
export default GenreFilter