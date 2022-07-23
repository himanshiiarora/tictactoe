import React from 'react' // imported useState
import Square from './Square'

const Board = ({board, handleSquareClick}) => {

  
  //moved alot of code to app.jsx
  const renderSquare = position => {  // used so that we need not call the same function in every tag of square.
    return(
      <Square 
        value={board[position]}
        onClick = {() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className='board'>

        <div className='board-row'> {/* the square tag is not replaced by the renderSquare so that 1. we need not call the onclick function again and again
        2. we can add value according to the position, i.e. we can have dynamic values at different places. */}
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