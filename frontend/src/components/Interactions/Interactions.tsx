import "./Interactions.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

interface Props {postId: number};

export function PostInteractions(props:Props) {


    const likePost = async () => {
        const response = await fetch(`http://localhost:3001/posts/${props.postId}/like`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
             
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer",
          });
          console.log(await response.text()
        )
    }

    const dislikePost = async () => {
        const response = await fetch(`http://localhost:3001/posts/${props.postId}/dislike`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
             
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer",
          });
          console.log(await response.text()
        )
    }


    return (
        <div className="reaction-buttons">
            <button className="reaction-buttons__button" onClick={() => likePost()}><FontAwesomeIcon icon={faThumbsUp} /></button>
            <button className="reaction-buttons__button" onClick={() => dislikePost()}><FontAwesomeIcon icon={faThumbsDown} /></button>
        </div>
    )
}