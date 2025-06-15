import React from 'react';
import logo from '../assets/images/logo.png';  // Correctly imported

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="/">
        <img
          src={logo}  
          alt="Savorly Logo"
          style={{ height: '40px' }}
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="/recipes">Recipes</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/books">Books</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/community">Community</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="/concept">Concept</a>
          </li>
        </ul>
      </div>

      <div className="d-flex">
        <a href="/login" className="btn btn-danger me-2">
          Login
        </a>
        <a href="/signup" className="btn btn-outline-danger">
          Signup
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
