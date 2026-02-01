import { useState } from "react"
import "./Songupvote.css"

/**
 * 
 * @returns 
 */
function Upvote() {
    //Using a reddit style of button feature for liking/disliking songs.
    const [likes, setlikes] = useState(0)
    return(
        <>
        <section className="collection">
            <button>
                Add to Collection
            </button>
        </section>
        <section className="vote-button">
            <button onClick={()=> setlikes(likes + 1)}>
                Like
            </button>
            <span className="counter">  {likes}  </span>
            <button onClick={()=> setlikes(likes - 1)}>
                Dislike
            </button>
        </section>
        </>
    )
}

export default Upvote