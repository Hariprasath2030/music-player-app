import React, { useState, useEffect, useRef } from 'react';
import track from './musicData';
const Player = ({ track, isPlaying, togglePlay, nextTrack, prevTrack }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Play or pause based on isPlaying and track change
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, track]);

  // Set duration when audio metadata is loaded
  const onLoadedMetadata = () => {
    const audioDuration = audioRef.current.duration;
    if (!isNaN(audioDuration)) {
      setDuration(audioDuration);
    }
  };

  // Update current time and progress as audio plays
  const onTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    setCurrentTime(current);
    setProgress((current / (audioRef.current.duration || 1)) * 100);
  };

  // Seek audio manually through progress bar
  const handleProgressChange = (e) => {
    const manualProgress = e.target.value;
    const manualTime = (manualProgress / 100) * duration;
    audioRef.current.currentTime = manualTime;
    setProgress(manualProgress);
  };

  // Format time in mm:ss format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="player">
      <img src={track.thumbnail} alt={`${track.title} thumbnail`} className="thumbnail" />
      <h3>Now Playing: {track.title}</h3>
      <p>Movie: {track.artist}</p>

      <audio
        ref={audioRef}
        src={track.audioSrc}
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={nextTrack} // Automatically play next track when the current one ends
      ></audio>

      <div className="progress-container">
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          className="progress-bar"
          min="0"
          max="100"
          step="0.1"
          aria-label="Progress"
        />
        <div className="time">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="controls">
        <button onClick={prevTrack} aria-label="Previous Track">Previous</button>
        <button onClick={togglePlay} aria-label="Play/Pause">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={nextTrack} aria-label="Next Track">Next</button>
      </div>
    </div>
  );
};

export default Player;
