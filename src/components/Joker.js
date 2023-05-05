import React from 'react';
import '../stylesheets/Joker.css'

function Joker(props){
  return(
    <div className='jokerContainer'>
      <img 
        className='jokerImage'
        src={require(`../images/${props.image}.png`)}
        alt='jokerphoto' />

      <div className='textContainer'>
        <p className='jokerName'><strong>{props.name}</strong></p>
        <p className='movieYear'>{props.year}</p>
        <p className='jokerHistory'>{props.history}</p>

      </div>
    </div>
  );
}

export default Joker;