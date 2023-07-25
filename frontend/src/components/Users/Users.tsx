import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Users = () => {

    interface UserPostModel {
        id: number;
        message: string;
        imageUrl: string;
        createdAt: string;
    }
    
    interface UserModel {
        id: number;
        name: string;
        username: string;
        profileImageUrl: string;
        coverImageUrl: string;
        email: string;
        posts: UserPostModel[];
        likes: UserPostModel[];
        dislikes: UserPostModel[];
    }

  const [users, setUsers] = useState<UserModel[]>([])

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    fetch(`http://localhost:3001/users?${page}&${pageSize}`).then(response => response.json()).then(data => setUsers(data.results));

  }, [])

  console.log(users);

  return (
    <>

      <div>
        { users ?
          users.map(user => (
            <div>
              <Link to={`/users/${user.id}`}><h1>{user.username}</h1></Link>
            
            </div>
          ))
          : 
          <p>Loading...</p>
        }
      </div>



    </>

  )
}

export default Users;