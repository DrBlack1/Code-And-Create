import React from 'react';
import './CurrentArtist.css';

const CurrentArtist = (props) => {
  return(
    <span>{props.name}</span>
  );
}

export default CurrentArtist;