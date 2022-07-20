import React, { useState } from 'react'
import Square from './Square'
const Board = () => {

  
  const [board, setBoard] = useState( Array(9).fill(null));
  const[isXNext, setIsXNext] = useState(false);
  // isXNext is a boolean value which represents our currept player, which simply means that is X the next player or not



  const handleSquareClick = (position) => {


    // there's a problem, that suppose if we already marked a box as 'O', and if we click on it again,
    // it will turn to 'X'. therefore to omit this behaviour, we will do the following.

    if(board[position]){
      return;
    }


    setBoard( (prev) => {
      return prev.map((square, pos) => {
        if(pos == position){
          return isXNext ? 'X' : 'O'; //but we need to update it, else all qill be O
        }

        return square;
      });
    });

    setIsXNext((prev) => !prev); // updation, O after X, and X after O
  };
  const renderSquare = position => {
    return(
      <Square 
        value={board[position]}
        onClick = {() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className='board'>

        <div className='board-row'>
          { renderSquare(0) }
          { renderSquare(1) }
          { renderSquare(2) }
        </div>

        <div className='board-row'>
          { renderSquare(3) }
          { renderSquare(4) }
          { renderSquare(5) }
        </div>


        <div className='board-row'>
          { renderSquare(6) }
          { renderSquare(7) }
          { renderSquare(8) }
        </div>

    </div>
  )
}

export default Board