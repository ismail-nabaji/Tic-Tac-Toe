import './App.css';
import React, { useState } from 'react';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('unstarted');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {board.map((value, index) => (
            <div>
              <button className="square" onClick={() => {}}>
                X
              </button>

            </div>))}
          </div>
      </header>
    </div>
  );
}

export default App;
