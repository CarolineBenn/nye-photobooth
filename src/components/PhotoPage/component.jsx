import React from 'react';

import Photo from '../Photo';

import './styles.css';

const PhotoDetail = ({ images }) => (
  <div>
    <div className="PhotoDetail-container">
      {images.map(image => 
        <Photo key={image.pose} {...image} />
      )}
      <div className="PhotoDetail-about">
        <div><h1>NYE 2018</h1></div>
        <div>Ealing, London 31/12/2017</div>
      </div>
    </div>
  </div>
);

export default PhotoDetail;
