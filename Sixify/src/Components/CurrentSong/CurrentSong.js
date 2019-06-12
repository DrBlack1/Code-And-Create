import React from 'react';
import './CurrentSong.css';

const CurrentSong = (props) => {
  return(
    <span>{props.title}</span>
  );
}

export default CurrentSong;