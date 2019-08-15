import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-light">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link text-light">
            Registration
          </Link>
        </li>
        <li className="nav-item">
          {!user.token && (
            <Link to="/login" className="nav-link text-light">
              Login
            </Link>
          )}
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-light">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users/self" className="nav-link text-light">
            Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link text-light">
            Users
          </Link>
        </li>
      </ul>
      {user.token && (
        <button
          className="btn btn-warning my-2 my-sm-0"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </nav>
  );
};
export default Navigation;
