import { useState } from "react";

const App = () => {
  const [board, setBoard] = useState([]);

  //Render Gameboard
  const renderSquare = (index) => <button className="w-16 h-16 bg-teal-800 ml-2 rounded-sm">{board[index]}</button>;

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div>
        <div>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default App;
