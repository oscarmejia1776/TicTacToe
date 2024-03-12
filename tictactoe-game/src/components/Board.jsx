import React from "react";
import "../styles/Board.css";

function Board() {
  // Array representing the board state
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // Function to render the board
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div key={colIndex} className="cell">
            {cell}
          </div>
        ))}
      </div>
    ));
  };

  return <div className="board">{renderBoard()}</div>;
}

export default Board;
