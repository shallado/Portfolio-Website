import { NavLink } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import avatar from '../img/avatar.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
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
      <div className="nav__container">
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Nav;
