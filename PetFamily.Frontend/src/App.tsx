import { useState } from "react";
import "./index.css";

type SquareValue = "X" | "O" | null;
type BoardArray = SquareValue[];

interface SquareProps {
	value: SquareValue;
	onSquareClick: () => void;
}

interface BoardProps {
	xIsNext: boolean;
	squares: BoardArray;
	onPlay: (squaresArray: BoardArray) => void;
}

function calculateWinner(squares: BoardArray): SquareValue {
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

	for (const [a, b, c] of lines) {
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

// Компоненты
function Square({ value, onSquareClick }: SquareProps) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) return;

		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		onPlay(nextSquares);
	};

	const winner = calculateWinner(squares);
	const status = winner
		? `Winner: ${winner}`
		: `Next player: ${xIsNext ? "X" : "O"}`;

	const renderSquare = (i: number) => (
		<Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
	);

	return (
		<>
			<div className="status">{status}</div>
			{[0, 3, 6].map((start) => (
				<div key={start} className="board-row">
					{[0, 1, 2].map((offset) => renderSquare(start + offset))}
				</div>
			))}
		</>
	);
}

export default function Game() {
	const [history, setHistory] = useState<BoardArray[]>([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	const handlePlay = (nextSquares: BoardArray) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove);
	};

	const moves = history.map((_, move) => {
		const description = move > 0 ? `Go to move #${move}` : "Go to game start";
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

export function App() {
	return <Game />;
}
