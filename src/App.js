import './App.css';
import React, {  useState } from 'react';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [gameStatus, setGameStatus] = useState('unstarted');

  

  const makeMove = (index) => {
    if (gameStatus !== 'unstarted') {
      setGameStatus('started');
    }
      console.log(index);
      console.log(player);
      console.log(board);
      if (board[index] === ''){
        console.log('hello');
        const newBoard = board;
        newBoard[index] = player;
        setBoard(newBoard);
        checkWinner();
        setPlayer(player === 'X' ? 'O' : 'X');
      }else{
        alert('This square is already taken');
      }
    }
  

  const checkWinner = () => {
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[3] === board[4] && board[4] === board[5] && board[3] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[6] === board[7] && board[7] === board[8] && board[6] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[0] === board[3] && board[3] === board[6] && board[0] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[1] === board[4] && board[4] === board[7] && board[1] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[2] === board[5] && board[5] === board[8] && board[2] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[0] === board[4] && board[4] === board[8] && board[0] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[2] === board[4] && board[4] === board[6] && board[2] !== ''){
      setGameStatus('winner');
      alert('Player ' + player + ' wins!');
    }else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== ''){
      setGameStatus('draw');
      alert('Draw!');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <h2>Player {player}'s turn</h2>
        <div className="board">
          {board.map((value, index) => (
            <div>
              <button className="square" onClick={() => {makeMove(index)}}> {board[index]} </button>
            </div>))}
        </div>
        <button className="reset" onClick={() => {setBoard(['', '', '', '', '', '', '', '', '']); setPlayer('X'); setGameStatus('unstarted')}}>Reset</button>
      </header>
    </div>
  );
}

export default App;
