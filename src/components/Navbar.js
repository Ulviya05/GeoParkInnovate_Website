// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css";

const Navbar = ({
  onLoginClick,
  onLogoClick,
  isLoggedIn,
  onAdminPanelClick,
}) => {
  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={onLogoClick}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://www.buythelogo.com/wp-content/uploads/2019/03/Leaf-tree-abstract-forest-logo-vector.jpg"
          alt="Logo"
          style={{ height: "50px", marginRight: "10px" }} // Adjust the logo size
        />
        <span className="navbar-name">ParkNav</span>
      </div>
      <ul className="navbar-links">
        <li>
          <button
            onClick={onLogoClick} // Clicking this will also scroll to the map
            style={{
              color: "black",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Map
          </button>
        </li>
        {!isLoggedIn ? ( // Show the login button if not logged in
          <li>
            <button
              onClick={onLoginClick}
              style={{
                color: "black",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </li>
        ) : (
          // Show Admin Panel button if logged in
          <li>
            <button
              onClick={onAdminPanelClick}
              style={{
                color: "black",
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Admin Panel
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
