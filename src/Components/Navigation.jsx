import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
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
      </ul>
    </nav>
  );
};
export default Navigation;
