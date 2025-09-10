import { Button } from "@mui/material";
import { SquareProps } from "../types/gameTypes";

export function Square({ value, onSquareClick }: SquareProps) {
	return (
		<Button
			variant="outlined"
			onClick={onSquareClick}
			sx={{
				color: "text.primary", // ← Явно указываем цвет текста
				fontSize: "24px", // ← Увеличиваем размер
				fontWeight: "bold", // ← Делаем жирнее
				minWidth: "60px", // ← Фиксируем размер кнопки
				minHeight: "60px",
			}}
		>
			{value || "\u00A0"}
		</Button>
	);
}
