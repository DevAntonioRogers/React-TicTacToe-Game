import { useState } from "react";

// const initialBoard = Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  //Handle Play
  const handleClick = (index) => {
    if (board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  //Check for a winner
  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  //Render Gameboard
  const renderSquare = (index) => (
    <button onClick={() => handleClick(index)} className="w-16 h-16 bg-white m-1 rounded-sm">
      {board[index]}
    </button>
  );

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div>
        <div className="flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default App;
