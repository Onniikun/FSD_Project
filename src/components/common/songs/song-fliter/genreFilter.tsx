import type { genre } from "../../../../types/genreModel.ts"
import "./genreFilter.css"
/**
 * Filters songs by Genre.
 * @param param0 - Selected Genre.
 * @returns - Filtered song.
 */
function GenreFilter({
    selectedGenre,
    setSelectedGenre,
}: genre) {
    const genre = ["All", "R&B", "Dark R&B", "K-Pop"]
    // This filter can be reused for filtering other song parameters.
    // EX: Artists, Release date, available links to.
    return(
        <>
        <section className="genre-filter">
            {genre.map((genre) =>(
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