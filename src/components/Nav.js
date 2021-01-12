import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import IconExit from '../svg/IconExit';
import IconHamburgerMenu from '../svg/IconHamburgerMenu';
import avatar from '../img/avatar.png';

function Nav() {
  const [navIsOpen, setIsOpen] = useState(false);

  function handleOpenNavMenu() {
    setIsOpen(true);
  }

  function handleCloseNavMenu() {
    setIsOpen(false);
  }

  const navClassName = navIsOpen ? 'nav nav--mobile-show' : 'nav';

  return (
    <>
      <nav className={navClassName}>
        <div className="nav__container-one">
          <IconExit handleCloseNavMenu={handleCloseNavMenu} />
          <IconHamburgerMenu handleOpenNavMenu={handleOpenNavMenu} />
        </div>
        <div className="nav__container-two">
          <div className="nav__profile-img-container">
            <img src={avatar} alt="profile" />
          </div>
          <ul className="nav__links">
            <li className="nav__link-container">
              <NavLink
                to="/"
                exact
                className="nav__link"
                activeClassName="nav__link-active"
              >
                About
              </NavLink>
            </li>
            <li className="nav__link-container">
              <NavLink
                to="/work"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                Work
              </NavLink>
            </li>
            <li className="nav__link-container">
              <NavLink
                to="/technologies"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                Technologies
              </NavLink>
            </li>
            <li className="nav__link-container">
              <NavLink
                to="/contact"
                className="nav__link"
                activeClassName="nav__link-active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__container-three">
          <SocialLinks />
        </div>
      </nav>
    </>
  );
}

export default Nav;
