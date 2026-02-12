import type { genreFilter } from "../../../../types/filterModel"
import "./genre-filter.css"

/**
 * Filters songs by Genre.
 * @param param0 - Selected Genre.
 * @returns - Filtered song.
 */
function GenreFilter({
    selectedGenre,
    setSelectedGenre,
}: genreFilter){
    const genres = ["All", "R&B", "Dark R&B", "K-Pop"];
    return(
        <>
        <section className="genre-filter">
            {genres.map((genre) =>(
                //https://react.dev/learn/rendering-lists
                <button key={genre} type="button"
                className={
                    selectedGenre === genre ? "genre-btn active" : "genre-btn"}
                onClick={() => setSelectedGenre(genre)}>
                {genre}
            </button>
            ))}
        </section>
        </>
    )
}
export default GenreFilter