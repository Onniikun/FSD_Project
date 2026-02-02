import { useState } from "react"
import "./song-upvote.css"

/**
 * 
 * @returns 
 */
function UpVote() {
    //Using a reddit style of button feature for liking/disliking songs.
    const [likes, setlikes] = useState(0)

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

export default UpVote