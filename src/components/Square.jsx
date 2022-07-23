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
      className='square' 
      onClick={onClick} 
      style={{fontWeight: isWinningSquare ? 'bold' : 'normal'}}
    > 
      { value }
    </button>
  );
};

export default Square