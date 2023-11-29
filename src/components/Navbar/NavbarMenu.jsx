import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <ul className="nav-menu">
      <li><NavLink className="nav-links" to="/about">About</NavLink></li>
      <li><NavLink className="nav-links" to="/work">Work</NavLink></li>
      <li>
        <a className="nav-links" href="mailto:hi@zhafranarman.com">Open to Work</a>
      </li>
    </ul>
  );
}

export default NavbarMenu;