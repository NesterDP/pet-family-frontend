import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Paper, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router";
export function LoginMenu() {
	const navigate = useNavigate();

	// Определяем активную вкладку по текущему пути
	return (
		<Paper
			elevation={2}
			sx={{
				mb: 3, // отступ снизу
				borderRadius: 2, // скругленные углы
			}}
		>
			<Tabs
				value={false}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="navigation menu"
				sx={{
					"& .MuiTab-root:hover": {
						color: "primary.main",
						backgroundColor: "action.hover",
					},
				}}
			>
				<Tab
					icon={<KeyboardReturnIcon />}
					label="Вернуться на главную"
					iconPosition="start"
					onClick={() => navigate("/")}
				/>
			</Tabs>
		</Paper>
	);
}
