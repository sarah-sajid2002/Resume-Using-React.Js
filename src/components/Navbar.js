import React from "react";

const Navbar = ({ navItems, navItems1, navItems2 }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: "aqua" }}>
      <a className="navbar-brand" href="#">
        <h1>navbar</h1>
      </a>

      <a className="navbar-brand" href="#">
        {navItems}
      </a>
      <a className="navbar-brand" href="#">
        {navItems1}
      </a>
      <a className="navbar-brand" href="#">
        {navItems2}
      </a>
    </nav>
  );
};

export default Navbar;
