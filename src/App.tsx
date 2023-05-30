import { useState } from "react";

const intialBoard = Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(intialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  //HANDLE PLAY
  const handlePlay = (index: number) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  //CHECK WINNER
  const checkWinner = (board: (string | null)[]) => {
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
    if (!board.includes(null)) {
      setWinner("Draw");
    }
  };

  //RESET GAME
  const resetGame = () => {
    setBoard(intialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  //RENDER GAMEBOARD
  const renderSquare = (index: number) => (
    <button onClick={() => handlePlay(index)} className="w-16 h-16 bg-white m-1 rounded-sm hover:bg-white/80">
      {board[index]}
    </button>
  );

  //STATUS
  let status;
  if (winner) {
    status = winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`;
  } else {
    status = `Current player: ${currentPlayer}`;
  }
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div>
        <h1 className="text-white text-center font-bold text-2xl">{status}</h1>
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
        <button onClick={resetGame} className="text-2xl bg-white mt-3 w-full rounded-xl hover:bg-white/90">
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default App;
