import { useState } from "react";

const App = () => {
  const [board, setBoard] = useState([]);

  const renderSquare = (index) => <button className="w-16 h-16 bg-teal-800 m-[1px]">{board[index]}</button>;
  return (
    <div>
      <div>
        <div className="row-1">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row-2">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row-3">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default App;
