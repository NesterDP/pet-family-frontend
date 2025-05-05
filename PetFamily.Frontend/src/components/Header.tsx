import { AppBar, Button } from "@mui/material";
import { NavLink } from "react-router";

export function Header() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between py-2 px-3">
				<div className="flex flex-row items-center gap-4 justfy-center">
					<NavLink to="/" className="sm:text-2xl pr-5">
						PetFamily
					</NavLink>
					<NavLink to="game">Игра</NavLink>
					<NavLink to="volunteers">Волонтеры</NavLink>
					<NavLink to="pets">Питомцы</NavLink>
				</div>
				<Button color="inherit">Login</Button>
			</div>
		</AppBar>
	);
}
