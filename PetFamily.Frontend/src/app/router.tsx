import { createBrowserRouter } from "react-router";
import Game from "../pages/Game/components/Game";
import { LoginMenu } from "../pages/Login/LoginMenu";
import { LoginPage } from "../pages/Login/LoginPage";
import { MainMenu } from "../pages/Main/MainMenu";
import { MainPage } from "../pages/Main/MainPage";
import { GameTable } from "../pages/MyGame/GameTable";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { TestPage } from "../pages/Test/TestPage";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: (
					<>
						<MainMenu />
						<MainPage />
					</>
				),
			},
			{
				path: "volunteers",
				element: (
					<>
						<MainMenu />
						Волонтеры
					</>
				),
			},
			{
				path: "pets",
				element: (
					<>
						<MainMenu />
						Питомцы
					</>
				),
			},
			{
				path: "game",
				element: (
					<>
						<MainMenu />
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
			{
				path: "test",
				element: (
					<>
						<MainMenu />
						<TestPage />
					</>
				),
			},
			{
				path: "myGame",
				element: (
					<>
						<MainMenu />
						<GameTable />
					</>
				),
			},
			{
				path: "profile",
				element: (
					<>
						<ProfilePage />
					</>
				),
			},
		],
		errorElement: <div>Попытка перейти по несуществующему пути</div>,
	},
]);
