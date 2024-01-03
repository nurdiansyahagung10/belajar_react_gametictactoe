/* eslint-disable react/prop-types */
import { useState } from 'react'


function Square({ value, onSquareClick,  }) {
  return <button className='square active' onClick={onSquareClick}>{value}</button>
}

export default function Board() {

  const [squares, setsquares] = useState(Array(9).fill(null));

  const [xIsNext, setxIsNext] = useState(true);


  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();

    nextSquare[i] = xIsNext ? 'x' : 'o';
    setsquares(nextSquare);
    setxIsNext(!xIsNext);

  }

  const winner = calculateWinner(squares);
  let status = '';

  if (winner) {
    status = 'winer ' + winner;
    
  }
  else {
    status = 'next player ' + (xIsNext ? 'x' : 'o');
  }

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <small>{status}</small>

      <div className='board'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )
}

function calculateWinner(squares) {
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

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
