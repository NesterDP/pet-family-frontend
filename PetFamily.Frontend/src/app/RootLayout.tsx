import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function RootLayout() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				bgcolor: "background.default",
				color: "text.primary",
			}}
		>
			<Header />
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	);
}
