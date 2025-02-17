import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  return (
    <nav className={`Navbar ${navbarExpanded ? "Navbar--expanded" : ""}`}>
      <NavLink to='/'><h3 className="Navbar__heading">MyFace</h3></NavLink>
      <div className="Navbar__content">
        <button className="Navbar__toggler" onClick={() => setNavbarExpanded(!navbarExpanded)}>{navbarExpanded ? <FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faHamburger}/>}</button>
        <ul className="Navbar__links">
          <li><NavLink to="/posts" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Posts</NavLink></li>
          <li><NavLink to="/users" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Users</NavLink></li>
          <li><NavLink to="/create-user" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Create User</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;