import { createBrowserRouter } from "react-router";
import { Menu } from "../components/Menu";
import Game from "../pages/Game/components/Game";
import { MainPage } from "../pages/MainPage";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: (
					<>
						<Menu />
						<div className="flex-1 flex items-center justify-center">
							<MainPage />
						</div>
					</>
				),
			},
			{
				path: "volunteers",
				element: (
					<>
						<Menu />
						<div className="flex-1 flex items-center justify-center">
							Волонтеры
						</div>
					</>
				),
			},
			{
				path: "pets",
				element: (
					<>
						<Menu />
						<div className="flex-1 flex items-center justify-center">
							Питомцы
						</div>
					</>
				),
			},
			{
				path: "game",
				element: (
					<>
						<Menu />
						<div className="flex-1 flex items-center justify-center">
							<Game />
						</div>
					</>
				),
			},
		],
	},
]);
