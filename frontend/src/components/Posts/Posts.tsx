import {useEffect, useState} from 'react'


const Posts = () => {
    
    const [posts, setPosts] = useState()
    
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        fetch(`http://localhost:3001/posts?${page}&${pageSize}`).then(response => response.json()).then(data => setPosts(data));
        
    }, [])
    
    console.log(posts);

  return (
    <div>Posts</div>

  )
}

export default Posts;