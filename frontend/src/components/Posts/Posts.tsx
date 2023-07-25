import { useEffect, useState } from 'react'


const Posts = () => {

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

  const nextPage = () => {
    if(page !== 10) 
        setPage(page + 1)
  }
  const prevPage = () => {
      if(page !== 1) 
          setPage(page - 1)
  }

  const [posts, setPosts] = useState<Post[]>([])

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/posts?page=${page}`).then(response => response.json()).then(data => setPosts(data.results));

  }, [nextPage, prevPage])

  return (
    <>  

      <div>
        <p onClick={() => prevPage()}>Previous</p>
        <p onClick={() => nextPage()}>Next</p>
      </div>

      <div>
        { posts ?
          posts.map(post => (
            <div>
              <h1>{post.message}</h1>
              <img src={post.imageUrl} alt="" />
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