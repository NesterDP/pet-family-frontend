import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router.tsx";
import "./index.css";
import { lightTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={lightTheme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);
