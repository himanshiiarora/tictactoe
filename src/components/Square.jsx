//rafce
import React from 'react'

const Square = ({ value ,onClick, isWinningSquare}) => {
  console.log('Sqaure rerendered');
  return (
    // <button className='square'
      // onClick={() => {
      //   console.log(value);}}
      // > { value } </button>
      
      //or


    <button 
      onClick={onClick} 
      style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}}
      className={`square ${isWinningSquare ? 'winning' : '' } ${value === 'X' ? 'text-green' : 'text-blue'}`} 
    > 
      { value }
    </button>
  );
};

export default Square