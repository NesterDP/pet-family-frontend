import HomeIcon from "@mui/icons-material/Home";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export function Menu() {
	return (
		<div role="presentation">
			<Breadcrumbs
				aria-label="breadcrumb"
				separator="-"
				sx={{
					fontSize: "1.4rem",
				}}
			>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/"
				>
					<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Главная
				</Link>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/volunteers"
				>
					<SupportAgentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Волонтеры
				</Link>
				<Link
					underline="hover"
					sx={{ display: "flex", alignItems: "center" }}
					color="inherit"
					href="/pets"
				>
					<RealEstateAgentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
					Помочь животным
				</Link>
			</Breadcrumbs>
		</div>
	);
}
