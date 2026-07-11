import { Box } from "@mui/material";

interface PageContainerProps {
	children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
	return (
		<Box
			component="main"
			sx={{
				px: 3, // padding-left & padding-right
				py: 2, // padding-top & padding-bottom
				maxWidth: 1400, // максимальная ширина
				mx: "auto", // центрирование
				width: "100%",
				flex: 1, // этот элемент лежит внутри флекс-контейнера, и должен занимать всю доступную ему область.
			}}
		>
			{children}
		</Box>
	);
}
