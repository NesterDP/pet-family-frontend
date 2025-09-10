import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: grey[300],
			main: grey[600],
			dark: grey[900],
			contrastText: "#fff",
		},
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: grey[50],
		},
	},
});
