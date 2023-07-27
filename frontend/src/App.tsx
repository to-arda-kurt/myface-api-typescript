import './root.scss'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'
import Navbar from './components/NavBar/NavBar';
import Home from './Pages/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserDetails from './components/Users/UserDetails/UserDetails';
import CreateUser from './components/Users/CreateUser/CreateUser';




function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="route-margin">
          <Routes>
              <Route index element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/users' element={<Users />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/users/:userId' element={<UserDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    
    </>
  )
}

export default App;
