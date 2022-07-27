import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const fontStyles = {
    color: "#fff",
    fontSize: "1.5rem",
    marginRight:"2rem",
  };

  return (
    <>
        
      <nav className="navbar navbar-expand-sm bg-secondary justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home" style={fontStyles}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/children-shoes" style={fontStyles}>
              Children
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/men-shoes" style={fontStyles}>
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/women-shoes" style={fontStyles}>
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart" style={fontStyles}>
                <i className="fas fa-cart-arrow-down"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
