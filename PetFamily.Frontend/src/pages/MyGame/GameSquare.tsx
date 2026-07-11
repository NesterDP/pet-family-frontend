interface GameSquareProps {
	value: string;
	squareIndex: number;
	onClick: (index: number) => void;
}

export function GameSquare({ value, squareIndex, onClick }: GameSquareProps) {
	return (
		<div
			onClick={() => onClick(squareIndex)}
			style={{
				width: "100px",
				height: "100px",
				border: "1px solid #ccc",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				fontSize: "24px",
				cursor: "pointer",
			}}
		>
			{value}
		</div>
	);
}
