import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <div className="Header">
    <div>
      <h1>PHOTOBOT</h1>
    </div>
    <nav className="Header-nav">
      <ul>
        <li className="Header-nav-link">
          <Link to="/">Homepage</Link>
        </li>
        <li className="Header-nav-link">
          <Link to="/photos">Photos</Link>
        </li>
        <li className="Header-nav-link">
          <Link to="/photbooth">Take a photo!</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
