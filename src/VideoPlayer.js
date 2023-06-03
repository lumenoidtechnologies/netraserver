import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js player
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('Player ready');
    });
  }

  componentWillUnmount() {
    // destroy Video.js player
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const { src, title } = this.props;

    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <video ref={node => (this.videoNode = node)} className="video-js vjs-default-skin" controls />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
