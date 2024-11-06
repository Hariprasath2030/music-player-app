import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Player from './Player';
import About from './About';
import TrackList from './TrackList';
import tracks from './musicData';
import logo from '../public/photo/hari.png'; // Import your logo

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[prevIndex]);
    setIsPlaying(true);
  };

  const selectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <Router>
      <div className="background-image"></div>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">HP Music Player</span>
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TrackList tracks={tracks} selectTrack={selectTrack} />
              <Player
                track={currentTrack}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
