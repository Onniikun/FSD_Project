import { useState } from "react"
import "./song-upvote.css"

/**
 * A number counter to display the amount of likes a song has.
 * @returns - The number of likes or dislikes.
 */
export function Upvote() {
    //Using a reddit style of button feature for liking/disliking songs.
    const [likes, setlikes] = useState(10)

    const like = () => {
        setlikes(likes === 1 ? 0: 1)
    }
    const dislike = () => {
        setlikes(likes === -1 ? 0: -1)
    }

    return(
        <>
        <section className="collection">
            <button>
                Add to Collection
            </button>
        </section>
        <section className="vote-button">
            <button onClick={like}>
                Like
            </button>
            <span className="counter">  {likes}  </span>
            <button onClick={dislike}>
                Dislike
            </button>
        </section>
        </>
    )
}