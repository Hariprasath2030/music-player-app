
import './App.css';

const TrackList = ({ tracks, selectTrack }) => {
  return (
    <div className="player-container">
      {/* Track List */}
      <div className="track-list">
        <h2>Available Tracks</h2>
        <ul>
          {tracks.map((t, index) => (
            <li key={index}>
              <button onClick={() => selectTrack(t)}>{t.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;
