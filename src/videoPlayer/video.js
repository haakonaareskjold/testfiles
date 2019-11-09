import React from 'react';

export const VIDEOS = {
  RickRoll: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  HEYAYAYA: 'https://www.youtube.com/embed/cVYvozAWPtc?autoplay=1',
  Kappa: 'https://www.youtube.com/embed/BpHSm0KcW7o?autoplay=1',
  HL3Trailer: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
};

export class Video extends React.Component {
  render() {
    return (
      <div>
        <iframe title ="Video" style = {{width: "720", height: "480", frameborder: "0", autoplay: "1", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}} 
        src={this.state.src} />
      </div>
    );
  }
}