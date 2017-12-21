import React, { Component } from 'react';

import Photos from '../../data/photos';

import { PhotoPageContainer } from '../PhotoPage';

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photoset: undefined,
    }
  }

  componentDidMount() {
    this.startPoll();
  }

  startPoll() {
    setInterval(() => this.selectPhoto(), 2000);
  }


  selectPhoto() {
    this.setState({
      photoset: Photos[Math.floor(Math.random() * Photos.length)],
    });
  }

  render() {
    const { photoset } = this.state;

    return (
      <div>
      {photoset &&
        <PhotoPageContainer
          index
          images={photoset.images}
        />}
      </div>
    );
  }
}

export default PhotoList;
