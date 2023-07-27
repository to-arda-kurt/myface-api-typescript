import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import './Users.scss'

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


  useEffect(() => {
    fetch(`http://localhost:3001/users?page=${page}`).then(response => response.json()).then(data => setUsers(data.results));

  }, [page])


  return (
    <>
    <Pagination pageNumber={ page } setPageNumber={ setPage }/>
      <div className="user-cards">
        { users ?
          users.map(user => (
            <div className='user-card'>
              <img className='user-card__profile-image' src={user.profileImageUrl} alt="User Profile Image" />
              <h1 className='user-card__name'>{user.name}</h1>
              <h3 className='user-card__username'>{user.username}</h3>

              <div className="user-card__post-details">
                <p className="user-card__post-details--text">{user.posts.length} <br/> <span>Posts</span></p>
                <p className="user-card__post-details--text">{user.likes.length} <br/> <span>Likes</span></p>
                <p className="user-card__post-details--text">{user.dislikes.length} <br/><span>Dislikes</span></p>
              </div>

              <Link to={`/users/${user.id}`}>
                <button className="user-card__button">View Profile</button></Link>
            
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