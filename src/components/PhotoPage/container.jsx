import React, { Component } from 'react';

import Photos from '../../data/photos';

import { PhotoPage } from '.';

class PhotoPageContainer extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    if (this.props.index) {
      console.log('hey', this.props)
      this.setState({
        photoset: this.props.images,
      })
    } else {
      const arr = window.location.pathname.split('/');
      const photoId = arr.reverse()[0];

      this.setState({
        photoset: Photos[photoId],
      });
    }
  }

  render() {
    const { photoset } = this.state;

    return (
      <div>
        {photoset && <PhotoPage images={photoset} />}
      </div>
    );
  }
}

export default PhotoPageContainer;
