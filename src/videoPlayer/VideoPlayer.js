import React from "react";
import Menu from "./menu";

const VIDEOS = {
  RickRoll: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  HEYAYAYA: "https://www.youtube.com/embed/cVYvozAWPtc?autoplay=1",
  Kappa: "https://www.youtube.com/embed/BpHSm0KcW7o?autoplay=1",
  HL3Trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
};

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
        <h1>Pick a video to make it play</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <iframe
          title="Video"
          style={{ width: 720, height: 480, border: "none", frameborder: 0 }}
          src={this.state.src}
        />
      </div>
    );
  }
}
