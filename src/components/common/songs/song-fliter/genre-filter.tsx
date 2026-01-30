import type { genre } from "../../../../types/genreModel.ts"
import "./genre-filter.css"

export function GenreFilter({
    selectedGenre,
    setSelectedGenre,
}: genre) {
    const genre = ["All", "R&B", "Dark R&B", "K-Pop"]
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