import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  return (
    <nav className={`Navbar ${navbarExpanded ? "Navbar--expanded" : ""}`}>
      <h3 className="Navbar__heading">MyFace</h3>
      <div className="Navbar__content">
        <button className="Navbar__toggler" onClick={() => setNavbarExpanded(!navbarExpanded)}>Expand</button>
        <ul className="Navbar__links">
          <li><NavLink to="/posts" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Posts</NavLink></li>
          <li><NavLink to="/users" className={({isActive}) => `Navbar__link ${isActive ? "Navbar__link--active" : ""}`}>Users</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar