import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-hls';

const App = () => {
  useEffect(() => {
    // Log when someone connects to the server
    console.log('A user connected');
  }, []);

  return (
    <div className="container">
      <header className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Video Player
          </a>
        </div>
      </header>

      <main>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Video Player</h1>
          <p className="lead">Experience seamless video playback with our player.</p>
        </div>

        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <Player src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
