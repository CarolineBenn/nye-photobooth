import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const HomepageContainer = () => (
  <div className="Homepage-container">
    <Link to="/take-photo" className="Homepage-button">
      Take a photo!
    </Link>
  </div>
);

export default HomepageContainer;
