import './App.css'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from './components/Users/UserDetails/UserDetails';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Posts />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userId' element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;
