import { useState } from 'react'
import './CreateUser.scss'

interface CreateUserRequest {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

const CreateUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        coverImageUrl: '',
        profileImageUrl: '',
    })

    const handleChange = (event) => {
        setUser(prevUser => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
        })
    }

    const postRequest = async () => {

        const response = await fetch('http://localhost:3001/users/create', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
             
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer",
            body: JSON.stringify(user),
          });
           console.log(await response.text()) // parses JSON response into native JavaScript objects
        }



    return (
        <div>
            <form className="user-form">
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" onChange={handleChange} value={user.name} />

                    {user.name}
                </label>
                <label htmlFor="username">
                    Username
                    <input type="text" name="username" onChange={handleChange} value={user.username} />
                    {user.username}
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" onChange={handleChange} value={user.email}/>
                    {user.email}
                </label>

                <label htmlFor="coverImageUrl">
                    Cover Image Url
                    <input type="url" name="coverImageUrl" onChange={handleChange} value={user.coverImageUrl} />
                    {user.coverImageUrl}
                </label>

                <label htmlFor="profileImageUrl">
                    Profile Image Url
                    <input type="url" name="profileImageUrl" onChange={handleChange} value={user.profileImageUrl}/>
                    {user.profileImageUrl}
                </label>

                <input type="button" value='Create User' onClick={postRequest}/>


            </form>


        </div>
    )
}

export default CreateUser;
