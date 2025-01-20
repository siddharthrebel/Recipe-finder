import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Navbar;