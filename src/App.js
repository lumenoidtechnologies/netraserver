import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    // Log when someone connects to the server
    console.log('A user connected');
  }, []);

  const video = {
    src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    title: 'Sample Video'
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mt-4 mb-4 text-center">Video Player</h1>
          <div className="card">
            <div className="card-body">
              <VideoPlayer src={video.src} title={video.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
