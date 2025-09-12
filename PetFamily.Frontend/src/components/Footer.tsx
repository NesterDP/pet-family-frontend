import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router";

export function Footer() {
	const navigate = useNavigate();

	return (
		<Paper
			component="footer"
			square
			variant="outlined"
			sx={{
				p: 2,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			{/* Левая часть: иконки-кнопки */}
			<div className="flex gap-4">
				<button
					onClick={() => navigate("/game")}
					className="flex items-center gap-1 hover:text-gray-300"
				>
					<EmailIcon fontSize="small" />
				</button>
				<button
					onClick={() => navigate("/pets")}
					className="flex items-center gap-1 hover:text-gray-300"
				>
					<TelegramIcon fontSize="small" />
				</button>
			</div>

			{/* Правая часть: текст */}
			<div className="text-sm opacity-80">©Автор сайта 2025</div>
		</Paper>
	);
}
