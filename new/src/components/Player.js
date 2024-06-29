import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const AudioPlayer = ({ audioSrc, imageUrl, trackTitle, artistName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('loadeddata', handleLoadedData);
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('loadeddata', handleLoadedData);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    if (isNaN(time)) {
      return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 10;
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="audio-player">
      <div className="audio-info">
        <div className="album-art">
          {imageUrl ? (
            <img src={imageUrl} alt="Album Art" className="album-image" />
          ) : (
            <div className="album-placeholder">
              <i className="fas fa-music"></i>
            </div>
          )}
        </div>
        <div className="track-info">
          <h3 className="track-title">{trackTitle}</h3>
          <p className="artist">{artistName}</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-btn" onClick={handleRewind}>
          <i className="fas fa-backward"></i>
        </button>
        <button className="control-btn" onClick={togglePlay}>
          {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
        <button className="control-btn" onClick={handleForward}>
          <i className="fas fa-forward"></i>
        </button>
        <div className="timeline">
          <input
            type="range"
            value={currentTime}
            max={duration || 0}
            onChange={(e) => {
              setCurrentTime(e.target.value);
              audioRef.current.currentTime = e.target.value;
            }}
          />
          <div className="time">
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayer;
