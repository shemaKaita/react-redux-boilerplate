import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import _ from 'lodash';
import './style.scss';
import Logo from './images/brand/Logo--main.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header uk-container-large">
        <div className="wrapper" >
          <div className="brand" >
            <Link to="/" >
              <img className="brand__logo" src={Logo} alt="" uk-img="true" />
            </Link>
          </div>
          <div className="nav">
            <ul className="nav__links" >
              <li className="nav__link">
                <Link to="/" className={window.location.pathname === '/' && _.isEmpty(window.location.hash) ? 'active' : ''} >
                  <span className="nav__link-text" >Home</span>
                </Link>
              </li>
              <li className="nav__link">
                <NavLink to="/#about" className={window.location.hash === '#about' ? 'active' : ''} >
                  <span className="nav__link-text" >About</span>
                </NavLink>
              </li>
              <li className="nav__link">
                <NavLink to="/#experiments" className={window.location.hash === '#experiments' ? 'active' : ''} >
                  <span className="nav__link-text" >Experiments</span>
                </NavLink>
              </li>
              <li className="nav__link">
                <NavLink to="/#contact" className={window.location.hash === '#contact' ? 'active' : ''} >
                  <span className="nav__link-text" >Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
