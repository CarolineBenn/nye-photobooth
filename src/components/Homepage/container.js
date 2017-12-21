import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const HomepageContainer = () => (
  <Link to="/take-photo" className="Homepage-button">
    Take a photo!
  </Link>
);

export default HomepageContainer;
