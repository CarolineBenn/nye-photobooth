import React, { Component } from 'react';
import 'whatwg-fetch'

import { PhotoPageContainer } from '../PhotoPage';

class Photos extends Component {
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
    fetch('http://192.168.0.133:4567/gallery')
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            photoset: data[Math.floor(Math.random() * data.length)],
          });
        });
      });
  }

  render() {
    const { photoset } = this.state;

    return (
      <div>
      {photoset &&
        <PhotoPageContainer
          index
          images={photoset.data}
        />}
      </div>
    );
  }
}

export default Photos;
