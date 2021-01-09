import React from 'react';
import { NavLink } from 'react-router-dom';
import IconGitHub from '../svg/IconGitHub';
import IconLinkedIn from '../svg/IconLinkedIn';
import IconTwitter from '../svg/IconTwitter';
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
        <div className="social-links">
          <a
            href="https://twitter.com/SHallado1012"
            target="_blank"
            rel="noreferrer"
          >
            <IconTwitter />
          </a>
          <a
            href="https://github.com/shallado"
            target="_blank"
            rel="noreferrer"
          >
            <IconGitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/sandrohallado/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
