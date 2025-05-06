import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router";

export function Footer() {
	const navigate = useNavigate();

	return (
		<footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
			{/* Левая часть: иконки-кнопки */}
			<div className="flex gap-4">
				<button
					onClick={() => navigate("/game")}
					className="flex items-center gap-1 text-white hover:text-gray-300"
				>
					<EmailIcon fontSize="small" />
					<span className="text-sm"></span>
				</button>
				<button
					onClick={() => navigate("/pets")}
					className="flex items-center gap-1 text-white hover:text-gray-300"
				>
					<TelegramIcon fontSize="small" />
					<span className="text-sm"></span>
				</button>
			</div>

			{/* Правая часть: текст */}
			<div className="text-sm opacity-80">©Автор сайта 2025</div>
		</footer>
	);
}
