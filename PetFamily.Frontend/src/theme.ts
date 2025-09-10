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
			light: grey[100], // светлый серый
			main: grey[800], // темно-серый (для кнопок и акцентов)
			dark: grey[900], // почти черный
			contrastText: "#fff", // белый текст на темном фоне
		},
	},
});
