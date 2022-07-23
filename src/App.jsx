import React, {useState} from "react"; // imported usestate
import Board from "./components/Board";
import { calculateWinner } from "./helpers";
import './styles/root.scss';


const App = () => {


  const [board, setBoard] = useState( Array(9).fill(null));  // used to set the state of the board
  const[isXNext, setIsXNext] = useState(false);
  // isXNext is a boolean value which represents our currept player, which simply means that is X the next player or not
  

  const winner = calculateWinner(board); // to calculate winner
  /* we put calculateWinner in a variable and passed the board state, we did not put it into a state because whenever our
  board updates, the component will be rerendered i.e everything that goes inside the component will be updated and this
  calculate winner will be updated everytime, so variable will be updated */
  

  const message = winner 
    ? `Winner is ${winner}` 
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  console.log(winner);






  console.log('board rerendered');



  const handleSquareClick = (position) => {


    // there's a problem, that suppose if we already marked a box as 'O', and if we click on it again,
    // it will turn to 'X'. therefore to omit this behaviour, we will do the following.

    if(board[position] || winner){
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


  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <br></br>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;