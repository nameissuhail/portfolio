import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a Header.css file for styles
const Header = () => {
  return (
    <header className="header-container">
      <h1>Syed Suhail</h1>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
