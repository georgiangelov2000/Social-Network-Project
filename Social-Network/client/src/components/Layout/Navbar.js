import React, { Fragment } from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";

export const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
  const authLinks=(
    <ul>
        <li>
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt"/> {' '}
            <span className="hide-sm"> 
              Logout
            </span>
          </a>
        </li>
    </ul>
  )
  const guesLinks=(
    <ul>
        <li>
          <Link to="/">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
  )
  return (
    <nav className="navbar bg-dark">
      <h1>
          <i className="fas fa-code"></i>Social Network Application
      </h1>
      {!loading && (<Fragment>{isAuthenticated? authLinks:guesLinks}</Fragment>) }
    </nav>
  );
};

Navbar.PropTypes={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
}

const mapStateToProps =state=>({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);