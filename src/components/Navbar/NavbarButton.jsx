const NavbarButton = ({menuActive, onClick}) => {

  const handleOnClick = (e) => {
    if (onClick) onClick(e);
  }

  return (
    <button
      className={`navbar-menu-button ${menuActive ? "" : "is-open"}`}
      id="burger"
      onClick={handleOnClick}
    >
      <div className="menu-button-text">Menu</div>
      <div className="menu-button-text">Close</div>
    </button>
  )
}

export default NavbarButton;