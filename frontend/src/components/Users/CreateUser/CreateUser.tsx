import { FormEvent, useState } from 'react'
import './CreateUser.scss'

interface CreateUserRequest {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

const CreateUser = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [coverImageUrl, setCoverImageUrl] = useState("")
    const [profileImageUrl, setProfileImageUrl] = useState("")

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSubmittedValid, setFormSubmittedValid] = useState(true)

    const tryCreateUser = (event: FormEvent) => {
        event.preventDefault()
        setFormSubmitted(true)
        if ((event.target as HTMLFormElement).checkValidity()) {
            fetch('http://localhost:3001/users/create', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
             
            },
            body: JSON.stringify({
                name,
                username,
                email,
                coverImageUrl,
                profileImageUrl,
            }),
          }).then((response) => {
            if (response.ok) {
                setFormSubmittedValid(true)
                setName("")
                setUsername("")
                setEmail("")
                setCoverImageUrl("")
                setProfileImageUrl("")
            } else {
                setFormSubmittedValid(false)
            }
          }).catch(() => {
            setFormSubmittedValid(false)
          })
        } else {
            setFormSubmittedValid(false)
        }
    }


    return (
        <div className="user-form-wrapper">
            <form className="user-form" onSubmit={tryCreateUser} noValidate>
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
                    <input required type="url" name="profileImageUrl" onChange={handleChange} value={user.profileImageUrl}/>
                </div>

                <p className="error-message">{errorMessage}</p>

                <input className="submit-button" type="submit" value='Create User' />


            </form>


        </div>
    )
}

export default CreateUser;
