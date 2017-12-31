import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'whatwg-fetch'

import Poses from '../../data/poses';

import Pose from '../Pose';

const TIME = 3000;

class TakeAPhoto extends Component {
  constructor() {
    super();
    this.state = {
      instruction: 'Ready?',
      poses: undefined,
      posesPreview: undefined,
      preview: undefined,
      finished: false,
    };
    this.setPoses = this.setPoses.bind(this);
    this.showPosesPreview = this.showPosesPreview.bind(this);
    this.getReady = this.getReady.bind(this);
    this.takePhotos = this.takePhotos.bind(this);
    this.getOutTheBooth = this.getOutTheBooth.bind(this);
  }

  componentDidMount() {
    // Set timeout to show 'Ready? for 4 seconds'.
    setTimeout(() => {
      this.selectPoses();
    }, TIME * 2);
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

    // Initial state is for two seconds because of setInterval within showPosesPreview!
    this.setState({
      instruction: 'Your poses are...',
    }, this.setPoses(selectedPoses));
  }

  setPoses(poses) {
    this.setState({
      poses,
      posesPreview: poses.map(pose => pose),
    }, this.showPosesPreview);
  }

  showPosesPreview() {
    const { posesPreview } = this.state;
    const interval = setInterval(() => {
      let currentPose = posesPreview.shift();

      this.setState({
        instruction: false,
        preview: `${currentPose}-preview`,
      });
      if (posesPreview.length === 0) {
        clearTimeout(interval);
        this.getReady();
      }
    }, TIME);
  }

  getReady() {
    // Put this in a setTimeout so that the last pose preview is on screen for `TIME`.
    setTimeout(() => {
      this.setState({
        preview: undefined,
        instruction: 'Smile!',
      }, this.takePics);
    }, TIME);
  }

  takePics() {
    setTimeout(() => this.takePhotos(), TIME)
  }

  takePhotos() {
    const { poses } = this.state;
    const dateNow = Date.now();

    const interval = setInterval(() => {
      let currentPose = poses.shift();

      let poseParams = currentPose.replace(/\s+/g, '-').toLowerCase();

      this.setState({
        instruction: undefined,
        currentPose: `${currentPose} - LIVe`,
      });


      // Fetch occurs after one second in order to give users a chance to figure out the pose.
      setTimeout(() => {
        fetch(`http://192.168.0.133:4567/shutter/${dateNow}/${poseParams}`)
          .catch(err => console.log('err', err));
      }, TIME / 3);

      if (poses.length === 0) {
        clearTimeout(interval);
        this.getOutTheBooth();
      }
    }, TIME);
  }

  getOutTheBooth() {
    setTimeout(() => {
      this.setState({
        currentPose: undefined,
        instruction: 'Sweet! All done. Keep an eye out for all your photos',
      }, this.finish);
    }, 2000)
  }

  finish() {
    this.setState({ finished: true }, this.redirect);
  }

  redirect() {
    // After X seconds, redirect to '/'.
    setTimeout(() => {
      this.props.history.push('/');
    }, TIME * 4);
  }

  render() {
    const {
      currentPose,
      finished,
      preview,
      instruction,
    } = this.state;

    return (
      <div>
        {instruction && <div>{instruction}</div>}
        {preview && <div>{preview}</div>}
        {currentPose && <div>{currentPose}</div>}
        {finished && <div>FINSIHED</div>}
      </div>
    );
  }
}
export default withRouter(TakeAPhoto);;
