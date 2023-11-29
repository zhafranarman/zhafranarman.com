import NavbarMenu from "./NavbarMenu";

const NavbarMobile = ({ menuActive }) => {
  return (
    <aside className={`mobile-menu ${menuActive ? "" : "is-open"}`}>
      <div className="mobile-menu-container container">
        <NavbarMenu />
      </div>
    </aside>
  )
}

export default NavbarMobile;