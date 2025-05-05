import { Button } from "@mui/material";
import { SquareProps } from "../../types/gameTypes";

export function Square({ value, onSquareClick }: SquareProps) {
	return (
		<Button variant="outlined" onClick={onSquareClick}>
			{value || "\u00A0"}
		</Button>
	);
}
