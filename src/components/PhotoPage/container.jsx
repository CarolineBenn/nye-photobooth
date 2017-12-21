import React, { Component } from 'react';

import Photos from '../../data/photos';

import { PhotoPage } from '.';

class PhotoPageContainer extends Component {
  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    const arr = window.location.pathname.split('/');
    const photoId = arr.reverse()[0];

    this.setState({
      photoset: Photos[photoId],
    });
  }

  render() {
    const { photoset } = this.state;

    return (
      <div>
        {(this.props.index || photoset) &&
          <PhotoPage
            images={(this.props && this.props.index)
              ? this.props.images
              : photoset
            }
          />}
      </div>
    );
  }
}

export default PhotoPageContainer;
