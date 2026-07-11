import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CrueltyFreeIcon from "@mui/icons-material/CrueltyFree";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import StarIcon from "@mui/icons-material/Star";
import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth/useAuth";

export function Header() {
	const navigate = useNavigate();
	const { accessToken, logout } = useAuth();

	return (
		<AppBar position="static" color="primary">
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
					{accessToken === undefined ? (
						<IconButton onClick={() => navigate("/login")} color="inherit">
							<LoginIcon />
						</IconButton>
					) : (
						<div>
							<IconButton onClick={() => navigate("/profile")} color="inherit">
								<AccountBoxIcon />
							</IconButton>
							<IconButton onClick={() => logout()} color="inherit" edge="end">
								<LogoutIcon />
							</IconButton>
						</div>
					)}
				</div>
			</div>
		</AppBar>
	);
}
