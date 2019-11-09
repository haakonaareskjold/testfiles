import React from 'react';
import { Video } from './video';
import Menu from './menu';
import { VIDEOS } from './video'



export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.fast };
  }
  
  chooseVideo(newVideo) {
  this.setState({
    src: VIDEOS[newVideo]
  });
}
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
         <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}