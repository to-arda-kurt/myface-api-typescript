import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import "./UserDetails.scss"


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


const UserDetails = () => {

  const [user, setUser] = useState<UserModel>();
  const { userId } = useParams();
  //const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3001/users/${userId}`).then(response => response.json()).then(data => setUser(data));
  }, [])

  return (
    <>
      <div>UserDetails</div>
      {user !== undefined && 
        <>
          <div>
            <p>{user.username}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>

          <div>
            <h1>{user.username}'s Posts</h1>
            <div className="user-posts">
              { user.posts 
              ? user.posts.map(post => (
              <div className="user-posts-post">
                <img className="user-posts-post_image" src={post.imageUrl} alt="" />
                <div className="user-posts-post-details">
                  <p className="user-posts-post-details_username">{user.username}</p>
                  <p className="user-posts-post-details_date">{post.createdAt}</p>
                  <p className="user-posts-post-details_message">{post.message}</p>
                </div>
              </div>
              ))
              :<p>No posts yet</p>
            }
            </div>
          </div>

          <div>
            <h1>{user.username}'s Liked Posts</h1>
            <div className="user-posts">
              { user.likes 
              ? user.likes.map(like => (
              <div className="user-posts-post">
                <img className="user-posts-post_image" src={like.imageUrl} alt="" />
                <div className="user-posts-post-details">
                  <p className="user-posts-post-details_username">{user.username}</p>
                  <p className="user-posts-post-details_date">{like.createdAt}</p>
                  <p className="user-posts-post-details_message">{like.message}</p>
                </div>
              </div>
              ))
              :<p>No liked posts yet</p>
              }
            </div>
          </div>

          <div>
            <h1>{user.username}'s Disliked Posts</h1>
            <div className="user-posts">
              { user.dislikes 
              ? user.dislikes.map(dislike => (
              <div className="user-posts-post">
                  <img className="user-posts-post_image" src={dislike.imageUrl} alt="" />
                  <div className="user-posts-post-details">
                    <p className="user-posts-post-details_username">{user.username}</p>
                    <p className="user-posts-post-details_date">{dislike.createdAt}</p>
                    <p className="user-posts-post-details_message">{dislike.message}</p>
                  </div>
                </div>
              ))
              :<p>No disliked posts yet</p>
              }
            </div>
          </div>
        </>
      }

    </>
  )
}

export default UserDetails