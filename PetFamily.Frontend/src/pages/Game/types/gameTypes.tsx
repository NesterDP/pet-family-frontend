export type SquareValue = "X" | "O" | null;
export type BoardArray = SquareValue[];

export interface SquareProps {
	value: SquareValue;
	onSquareClick: () => void;
}

export interface BoardProps {
	xIsNext: boolean;
	squares: BoardArray;
	onPlay: (squaresArray: BoardArray) => void;
}
