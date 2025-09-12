import { Box } from "@mui/material";

interface PageContainerProps {
	children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
	return (
		<Box
			sx={{
				px: 3, // padding-left & padding-right
				py: 2, // padding-top & padding-bottom
				maxWidth: 1400, // максимальная ширина
				mx: "auto", // центрирование
				width: "100%",
			}}
		>
			{children}
		</Box>
	);
}
