import { createBrowserRouter } from "react-router";
import Game from "../pages/Game/components/Game";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "volunteers",
				element: <div>Волонтеры</div>,
			},
			{
				path: "pets",
				element: <div>Питомцы</div>,
			},
			{
				path: "game",
				element: <Game />,
			},
		],
	},
]);
