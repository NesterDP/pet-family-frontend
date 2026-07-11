import { useState } from "react";
import { GameSquare } from "./GameSquare";

export function GameTable() {
	const [squares, setSquares] = useState(Array(9).fill(""));
	const [currentPlayer, setCurrentPlayer] = useState("X");

	const HandleClick = (i: number) => {
		const newSquares = squares.slice();
		if (newSquares[i] !== "") {
			return;
		}
		newSquares[i] = currentPlayer;
		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		setSquares(newSquares);
	};

	const clearGame = () => {
		setSquares(Array(9).fill(""));
		setCurrentPlayer("X");
	};

	return (
		<div>
			<div className="flex gap-2">
				<div className="flex flex-col gap-2">
					<GameSquare
						value={squares[0]}
						squareIndex={0}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[1]}
						squareIndex={1}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[2]}
						squareIndex={2}
						onClick={HandleClick}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<GameSquare
						value={squares[3]}
						squareIndex={3}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[4]}
						squareIndex={4}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[5]}
						squareIndex={5}
						onClick={HandleClick}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<GameSquare
						value={squares[6]}
						squareIndex={6}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[7]}
						squareIndex={7}
						onClick={HandleClick}
					/>
					<GameSquare
						value={squares[8]}
						squareIndex={8}
						onClick={HandleClick}
					/>
				</div>
			</div>
			<button
				className="hover:bg-gray-300"
				onClick={clearGame}
				style={{
					border: "none",
					backgroundColor: "linear-gradient(to bottom, #f9f9f9, #e6e6e6)",
					color: "#333",
					fontSize: "14px",
					fontWeight: "bold",
					padding: "10px 20px",
					borderRadius: "5px",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					marginTop: "20px",
					cursor: "pointer",
				}}
			>
				Сбросить игру
			</button>
			{(function myFunction() {
				if (currentPlayer === "X") {
					const kek = "Мой ход";
					return <div>{kek}</div>;
				} else {
					const noKek = "Нет мой!";
					return <div>{noKek}</div>;
				}
			})()}
		</div>
	);
}
