import React from "react";

const NavBar = ({ title }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      {title}
    </a>
  </nav>
);

export default NavBar;
