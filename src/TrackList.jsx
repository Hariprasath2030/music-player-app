import React from 'react';
import './App.css';
const TrackList = ({ tracks, selectTrack }) => {
  return (
    <div>
      <h2>Available Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <button onClick={() => selectTrack(track)}>{track.title} by {track.artist}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
