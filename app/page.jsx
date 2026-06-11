'use client';

import { useState } from 'react';
import './home.css';

const winningPositionsArray= [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [2,5,8],
  [3,6,9],
];

export default function Home() {
  // current value, and a function to set current value
  const [currentPlaying, setCurrentPlaying] = useState('O');

  const [playerOPositions, setPlayerOPositions]= useState([]);
    const [playerXPositions, setPlayerXPositions]= useState([]);


  function switchPlayers() {
    if (currentPlaying === 'O') {
      setCurrentPlaying('X');
    } else {
      setCurrentPlaying('O');
    }
  }

  const play = (position) => {
    // check if the position is already played
    if(playerOPositions.includes(position) || playerXPositions.includes(position)){
      alert(`${position} already played`);
      return;
    }
    // if not played ,attribute that to a player
    if(currentPlaying==='X'){
      setPlayerXPositions([...playerXPositions, position]);
    }else{
      setPlayerOPositions([...playerOPositions, position]);
    }
    
    
    switchPlayers();
  };


  function play1() {
    play(1);
  }

  function displayValue(position){
    if(playerOPositions.includes(position)){
      return 'X';
    }else{
      return 'O';
    }
  }

  return (
    /* flex-container */
    <div className='container'>
      {/* CSS Grid, 3 x 3 */}
      <div className='grid'>
        <div onClick={play1}>{displayValue(1)}</div>
        <div onClick={() => play(2)}>{displayValue(2)}</div>
        <div onClick={() => play(3)}>{displayValue(3)}</div>
        <div onClick={() => play(4)}>{displayValue(4)}</div>
        <div onClick={() => play(5)}>{displayValue(5)}</div>
        <div onClick={() => play(6)}>{displayValue(6)}</div>
        <div onClick={() => play(7)}>{displayValue(7)}</div>
        <div onClick={() => play(8)}>{displayValue(8)}</div>
        <div onClick={() => play(9)}>{displayValue(9)}</div>
      </div>

      <div>Currently Playing: {currentPlaying} </div>
    </div>
  );
}
