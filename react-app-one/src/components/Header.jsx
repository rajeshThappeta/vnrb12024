import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-light py-2">
      <ul className="nav justify-content-end fs-4">
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary " to="register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-secondary" to="technologies">
            Technologies
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
