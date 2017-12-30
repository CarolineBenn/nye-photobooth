import React from 'react';

import './styles.css';

const Pose = ({ pose, preview }) => (
  <div className={preview ? "Pose-pose" : ""}>{pose}</div>
);

export default Pose;
