import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "./navbar.scss";

const Navbar = ({ setInput }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(searchInput);
    setSearchInput("");
  };

  return (
    <nav role="navbar" className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link exact to="/" className="link logo-link">
            movie<span>pedia</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/movies" className="link">
            movies
          </Link>
          <Link to="/series" className="link">
            series
          </Link>
        </div>
        <form action="" className="nav-search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your movie..."
            className="nav-input"
            value={searchInput}
            onChange={(e) => {
              setInput(e.target.value);
              setSearchInput(e.target.value);
            }}
          />
          <IoSearchOutline
            className="search-icon"
            disabled={!searchInput}
            type="submit"
            onClick={handleSubmit}
          />
        </form>
        <div className="nav-buttons">
          <Link to="/signup" className="btn link nav-btn">
            Sign up
          </Link>
          <Link to="/signin" className="btn link nav-btn">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
