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
						<MainPage />
					</>
				),
			},
			{
				path: "volunteers",
				element: (
					<>
						<Menu />
						Волонтеры
					</>
				),
			},
			{
				path: "pets",
				element: (
					<>
						<Menu />
						Питомцы
					</>
				),
			},
			{
				path: "game",
				element: (
					<>
						<Menu />
						<Game />
					</>
				),
			},
		],
		errorElement: <div>404</div>,
	},
]);
