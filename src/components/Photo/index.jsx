import React from 'react';

import './styles.css';

const Photo = ({
  pose,
  gif,
}) => (
  <div className="Photo-container">
    <svg className="defs-only">
      <filter id="monochrome" colorInterpolationFilters="sRGB"
              x="0" y="0" height="100%" width="100%">
        <feColorMatrix type="matrix"
          values="0.95 0 0 0 0.05 
                  0.85 0 0 0 0.15  
                  0.50 0 0 0 0.50 
                  0    0 0 1 0" />
      </filter>
    </svg>

    <img src={gif} alt="img" className="Photo-image" />
    <div className="Photo-pose">{pose}</div>
  </div>
);

export default Photo;

