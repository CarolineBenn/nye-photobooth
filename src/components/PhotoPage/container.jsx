import React, { Component } from 'react';

import { PhotoPage } from '.';

class PhotoPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      photoset: undefined,
    };
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
