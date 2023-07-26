import { useEffect, useState } from 'react'
import  { PostInteractions }  from "../Interactions/Interactions"
import Pagination from "../Pagination/Pagination"
import "../Users/UserDetails/UserDetails.scss"

  interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  interface Post {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
  }

  

const Posts = () => {

  const [posts, setPosts] = useState<Post[]>([])

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/posts?page=${page}`).then(response => response.json()).then(data => setPosts(data.results));

  }, [page])

  return (
    <>  

      <Pagination pageNumber={ page } setPageNumber={ setPage }/>

      <div className="user-posts">
        { posts ?
          posts.map(post => (
            <div className="user-posts-post" key={post.id}>
                <img className="user-posts-post_image" src={post.imageUrl} alt="" />
                <div className="user-posts-post-details">
                  <p className="user-posts-post-details_username">{post.postedBy.username}</p>
                  <p className="user-posts-post-details_date">{post.createdAt}</p>
                  <p className="user-posts-post-details_message">{post.message}</p>
                  <PostInteractions postId={post.id}/>
                </div>
            </div>
          ))
          : 
          <p>Loading...</p>
        }
      </div>



    </>

  )
}

export default Posts;