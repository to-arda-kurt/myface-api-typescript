import { useState } from 'react'
import './CreateUser.scss'

interface CreateUserRequest {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

const validateName = () => {

}

const validateUsername = () => {
    
}

const validateEmail = () => {
    
}

const validateUrl = () => {
    
}

const CreateUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        username: '',
        coverImageUrl: '',
        profileImageUrl: '',
    })

    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (event) => {

        switch (event.target.name) {
            case("name"):
                validateName();
                break;
            case("username"):
                validateUsername();
                break;
            case("email"):
                validateEmail();
                break;
            case("coverImageUrl"):
                validateUrl();
                break;
            case("profileImageUrl"):
                validateUrl();
                break;
            default:
                break;
        }


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
        <div className="user-form-wrapper">
            <form className="user-form">
                <div className="user-form__control">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input className="user-form__control-input" required type="text" name="name" minLength={2} maxLength={20} onChange={handleChange} value={user.name} />
                </div>

                <div className="user-form__control">
                    <label htmlFor="username">
                        Username: 
                    </label>
                    <input className="user-form__control-input" required type="text" name="username" minLength={4} maxLength={12} onChange={handleChange} value={user.username} />
                </div>

                <div className="user-form__control">
                    <label htmlFor="email">
                        Email: 
                    </label>
                    <input className="user-form__control-input" required type="email" name="email" onChange={handleChange} value={user.email}/>
                </div>

                <div className="user-form__control">
                    <label htmlFor="coverImageUrl">
                        Cover Image Url: 
                    </label>
                    <input className="user-form__control-input" required type="url" name="coverImageUrl" onChange={handleChange} value={user.coverImageUrl} />
                </div>

                <div className="user-form__control">
                    <label htmlFor="profileImageUrl">
                        Profile Image Url: 
                    </label>
                    <input className="user-form__control-input" required type="url" name="profileImageUrl" onChange={handleChange} value={user.profileImageUrl}/>
                </div>

                <p className="error-message">{errorMessage}</p>

                <input className="submit-button" type="button" value='Create User' onClick={postRequest}/>


            </form>


        </div>
    )
}

export default CreateUser;
