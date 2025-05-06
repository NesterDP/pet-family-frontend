import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow flex items-center justify-center p-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
