import React, { useEffect, useRef } from 'react';
import HLSPlayer from '@ducanh2912/react-hls-player';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Log when someone connects to the server
    console.log('A user connected');
  }, []);

  const videoUrl = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  const handleToggleFullScreen = () => {
    const player = playerRef.current;
    if (player) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Video Player</h1>
      <div className="row">
        <div className="col-md-12">
          <HLSPlayer ref={playerRef} url={videoUrl} autoplay controls />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <button className="btn btn-primary" onClick={handleToggleFullScreen}>
            Toggle Full Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
