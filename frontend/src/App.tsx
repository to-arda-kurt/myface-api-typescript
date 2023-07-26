import './root.scss'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from './components/Users/UserDetails/UserDetails';
import CreateUser from './components/Users/CreateUser/CreateUser';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/posts' element={<Posts />} />
            <Route path='/users' element={<Users />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/users/:userId' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;
