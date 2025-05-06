import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

export function Header() {
	const navigate = useNavigate();

	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between py-2 px-3">
				{/* Левые иконки */}
				<div className="flex flex-row items-center gap-2">
					<IconButton
						onClick={() => navigate("/")}
						color="inherit"
						edge="start"
					>
						<CrueltyFreeIcon />
					</IconButton>
					<IconButton onClick={() => navigate("/favorite")} color="inherit">
						<StarIcon />
					</IconButton>
				</div>

				{/* Центральный текст */}
				<div className="text-2xl font-medium mx-auto cursor-default">
					PetFamily
				</div>

				{/* Правые иконки */}
				<div className="flex flex-row items-center gap-2">
					<IconButton onClick={() => navigate("/account")} color="inherit">
						<PersonIcon />
					</IconButton>
					<IconButton
						onClick={() => navigate("/logout")}
						color="inherit"
						edge="end"
					>
						<LogoutIcon />
					</IconButton>
				</div>
			</div>
		</AppBar>
	);
}
