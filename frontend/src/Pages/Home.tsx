import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to MyFace</h1>
            <p>MyFace helps you connect and share with the people in your life.</p>


            <div >
               <Link to='/create-user'> <button className="button">Register</button></Link>
                <Link to="/posts">    <button className="button">Login</button></Link>
            </div>
        </div>
    )
}

export default Home;