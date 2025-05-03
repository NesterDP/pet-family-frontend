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

	return (
		<>
			<div className="status">{status}</div>

			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>

			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>

			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
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
