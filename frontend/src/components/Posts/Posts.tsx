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

  const [posts, setPosts] = useState<Post[]>([])

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    fetch(`http://localhost:3001/posts?${page}&${pageSize}`).then(response => response.json()).then(data => setPosts(data.results));

  }, [])

  console.log(posts);



  return (
    <>

      <div>
        {
          posts.map(post => (
            <div>
              <h1>{post.message}</h1>
              <img src={post.imageUrl} alt="" />
            </div>

          ))
        }
      </div>



    </>

  )
}

export default Posts;