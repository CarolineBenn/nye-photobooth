import React, { Component } from 'react';

import Photos from '../../data/photos';

import { PhotoPageContainer } from '../PhotoPage';

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      selectedPhoto: undefined,
    }
  }

  componentDidMount() {
    this.startDisplay();
  }

  startDisplay() {
    let photoset = Photos[Math.floor(Math.random() * Photos.length)];
    this.setState({ photoset: photoset })
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
