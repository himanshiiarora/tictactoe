//rafce
import React from 'react'

const Square = ({ value ,onClick}) => {
  console.log('Sqaure rerendered');
  return (
    // <button className='square'
      // onClick={() => {
      //   console.log(value);}}
      // > { value } </button>
      
      //or


    <button className='square' onClick={onClick}> 
      { value }
    </button>
  );
};

export default Square