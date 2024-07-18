import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <ul class="nav-flex-row">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about">About</Link>
        </li>
        {user ? (
          <>
            <li class="nav-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li class="nav-item">
              <button class="nav-btn" onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li class="nav-item">
                <Link to="/login">Login</Link>
            </li>
            <li class="nav-item">
                <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
