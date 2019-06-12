import React, { Component } from "react";
import "./Player.css";
// import Song from '../CurrentSong/CurrentSong';
// import Artist from '../CurrentArtist/CurrentArtist';

class Player extends Component {

  state = {
    current: {
      song: 'testing',
      artist: 'oli is a nice guy',
      time: {
        elapsed: '',
        left: ''
      }
    }
  }

  render() {

    return (
      <div className="player">
        
            <div className="player-left">
            </div>
            <div className="player-middle">
              <div className="controls-top">
                
                      <button className="control-button shuffle">Shuffle</button>
                
                
                      <button className="control-button back">Back</button>
                
                
                      <button className="control-button play">Play</button>
                
                
                      <button className="control-button skip">Forward</button>
                
                
                      <button className="control-button repeat">Repeat</button>
                
              </div>

              <div className="controls-bottom">
                <div className="timer">
                      
                  </div>
              </div>

        </div> 
            <div className="player-Right">
                    <button className="control-button volume">Volume</button> 
            </div>  
       
    </div> 
    );
  }
}


//Entire player bar
export default Player;
