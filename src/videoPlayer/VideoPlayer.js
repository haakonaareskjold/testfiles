import React from 'react';
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
         <iframe title ="Video" style = {{width: "560", height: "315", frameborder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}} 
        src={this.state.src} />
      </div>
    );
  }
}