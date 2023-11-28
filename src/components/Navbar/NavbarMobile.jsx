import { NavLink } from "react-router-dom"

const NavbarMobile = ({ menuActive }) => {
  return (
    <aside className={`mobile-menu ${menuActive ? "" : "is-open"}`}>
      <div className="mobile-menu-container container">
        <li><NavLink className="nav-links" to="/about">About</NavLink></li>
        <li><NavLink className="nav-links" to="/work">Work</NavLink></li>
        <li><NavLink className="nav-links" to="/blog">Thoughts</NavLink></li>
        <li>
          <a className="nav-links" href="mailto:hi@zhafranarman.com">Let's Talk</a>
        </li>
      </div>
    </aside>
  )
}

export default NavbarMobile;