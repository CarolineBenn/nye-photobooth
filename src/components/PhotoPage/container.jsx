import React, { Component } from 'react';

import Photos from '../../data/photos';

import { PhotoPage } from '.';

class PhotoPageContainer extends Component {
  componentWillMount() {
    // Fetch photo:
    this.fetchData();
  }

  fetchData = () => {
    // Obvs this will need to be real, where params === photo.id
    this.setState({
      photoset: Photos[0],
    });
  }

  render() {
    return (
      <PhotoPage {...this.state.photoset} />
    );
  }
}

export default PhotoPageContainer;
