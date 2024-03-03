import React from 'react';
import { Link } from 'react-router-dom'; // Import useHistory from react-router-dom
import './Navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Netflix Clone</Link>
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/movie" className="navbar__link">Movie Details</Link> {/* Update the link to point to a specific movie */}
      <Link to="/not-found" className="navbar__link">Not Found</Link>
      <form className="form-inline my-2 my-lg-0" >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
