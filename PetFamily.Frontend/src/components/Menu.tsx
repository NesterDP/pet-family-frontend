import HomeIcon from "@mui/icons-material/Home";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Paper, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

export function Menu() {
	const navigate = useNavigate();
	const location = useLocation();

	// Определяем активную вкладку по текущему пути
	const getActiveTab = () => {
		if (location.pathname === "/") return 0;
		if (location.pathname === "/volunteers") return 1;
		if (location.pathname === "/pets") return 2;
		return 0;
	};

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		const paths = ["/", "/volunteers", "/pets"];
		navigate(paths[newValue]);
	};

	return (
		<Paper
			elevation={2}
			sx={{
				mb: 3, // отступ снизу
				borderRadius: 2, // скругленные углы
			}}
		>
			<Tabs
				value={getActiveTab()}
				onChange={handleTabChange}
				variant="fullWidth"
				aria-label="navigation menu"
			>
				<Tab icon={<HomeIcon />} label="Главная" iconPosition="start" />
				<Tab
					icon={<SupportAgentIcon />}
					label="Волонтеры"
					iconPosition="start"
				/>
				<Tab
					icon={<RealEstateAgentIcon />}
					label="Помочь животным"
					iconPosition="start"
				/>
			</Tabs>
		</Paper>
	);
}
