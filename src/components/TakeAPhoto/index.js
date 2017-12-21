import React, { Component } from 'react';

import Poses from '../../data/poses';

import Pose from '../Pose';

// Initial loading state (Let's take some photos)
// Your poses are: selectedPoses[0][1][2][3]
// Ready? 
// Here we go!

// POSE[0] - pause 3(?) seconds
// POSE[1] - pause 3(?) seconds
// POSE[2] - pause 3(?) seconds
// POSE[3] - pause 3(?) seconds

// Leave message for 8 seconds:
// You're all done! Keep an eye out for your photos on the screen



class TakeAPhoto extends Component {
  constructor() {
    super();
    this.state = {
      selectedPoses: [],
    };
    this.updatePoses = this.updatePoses.bind(this);
  }

  componentDidMount() {
    this.selectPoses();
  }

  updatePoses(selectedPoses) {
    this.setState({ selectedPoses })
  }

  selectPoses() {
    const selectedPoses = [];

    // Need four poses:
    for (let i = 0; i < 4; i++) {
      let index = [Math.floor(Math.random() * (Poses.length - selectedPoses.length))];
      selectedPoses.push(Poses[index]);
      // Remove from original arr to avoid duplication.
      Poses.splice(index, 1);
    }
    this.updatePoses(selectedPoses)
  }


  render() {
    const { selectedPoses } = this.state;
    return (
      <Pose
        pose={selectedPoses && selectedPoses[0]} />
    );
  }
}
export default TakeAPhoto;
