import { NavLink, useLocation } from "react-router-dom";

const NavbarMenu = () => {
  const location = useLocation();
  const { pathname } = location;
  
  return (
    <ul className="nav-menu">
      <li><NavLink className={`nav-links ${pathname === "/about" ? 'active' : ''}`} to="/about">About</NavLink></li>
      <li><NavLink className={`nav-links ${pathname === "/work" ? 'active' : ''}`}to="/work">Work</NavLink></li>
      <li>
        <div className="availibility" />
        <a className="nav-links" href="mailto:hi@zhafranarman.com">Open to Work</a>
      </li>
    </ul>
  );
}

export default NavbarMenu;