import { createBrowserRouter } from "react-router";
import Game from "../pages/Game/components/Game";
import { LoginMenu } from "../pages/Login/LoginMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import { Menu } from "../pages/Main/MainMenu";
import { MainPage } from "../pages/Main/MainPage";
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
			{
				path: "login",
				element: (
					<>
						{/* <BackMenu /> */}
						<LoginMenu />
						<LoginPage />
					</>
				),
			},
		],
		errorElement: <div>Попытка перейти по несуществующему пути</div>,
	},
]);
