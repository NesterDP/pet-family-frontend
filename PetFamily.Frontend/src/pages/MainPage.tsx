import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	FormControlLabel,
	FormGroup,
	IconButton,
	MenuItem,
	Pagination,
	Paper,
	Slider,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

// Mock данные животных
const animals = [
	{
		id: 1,
		name: "Барсик",
		type: "Кошка",
		age: 2,
		breed: "Британская",
		color: "Серый",
		vaccinated: true,
		status: "Ищет дом",
		image: "/pet1.jpg",
	},
	{
		id: 2,
		name: "Шарик",
		type: "Собака",
		age: 3,
		breed: "Дворняжка",
		color: "Черный",
		vaccinated: true,
		status: "На лечении",
		image: "/pet2.jpg",
	},
	{
		id: 3,
		name: "Мурка",
		type: "Кошка",
		age: 1,
		breed: "Сиамская",
		color: "Белый",
		vaccinated: false,
		status: "Нуждается в помощи",
		image: "/pet3.jpg",
	},
	{
		id: 4,
		name: "Рекс",
		type: "Собака",
		age: 4,
		breed: "Овчарка",
		color: "Коричневый",
		vaccinated: true,
		status: "Ищет дом",
		image: "/pet4.jpg",
	},
	{
		id: 5,
		name: "Пушистик",
		type: "Кролик",
		age: 1,
		breed: "Ангорский",
		color: "Белый",
		vaccinated: true,
		status: "Ищет дом",
		image: "/pet5.jpg",
	},
	{
		id: 6,
		name: "Бобик",
		type: "Собака",
		age: 2,
		breed: "Такса",
		color: "Коричневый",
		vaccinated: false,
		status: "На лечении",
		image: "/pet6.jpg",
	},
	{
		id: 7,
		name: "Снежок",
		type: "Кошка",
		age: 3,
		breed: "Персидская",
		color: "Белый",
		vaccinated: true,
		status: "Ищет дом",
		image: "/pet7.jpg",
	},
	{
		id: 8,
		name: "Рыжик",
		type: "Кот",
		age: 4,
		breed: "Мейн-кун",
		color: "Рыжий",
		vaccinated: true,
		status: "Нуждается в помощи",
		image: "/pet8.jpg",
	},
];

export function MainPage() {
	// Состояния для пагинации
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(3); // 3 карточки на страницу

	// Вычисляем данные для текущей страницы
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentAnimals = animals.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				gap: 3,
				minHeight: "100vh",
				p: 2,
			}}
		>
			{/* Левая колонка - форма фильтров */}
			<Paper
				sx={{
					p: 3,
					flex: 1,
					maxWidth: 400,
					height: "fit-content",
					position: "relative",
					top: 20,
					alignSelf: "flex-start",
					mb: { xs: 3, md: 0 },
				}}
			>
				<Typography variant="h6" gutterBottom>
					Поиск животного
				</Typography>

				<Box
					component="form"
					sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
				>
					<TextField fullWidth label="Имя животного" variant="outlined" />

					<TextField fullWidth select label="Вид" defaultValue="">
						<MenuItem value="dog">Собака</MenuItem>
						<MenuItem value="cat">Кошка</MenuItem>
						<MenuItem value="rabbit">Кролик</MenuItem>
					</TextField>

					<Box>
						<Typography gutterBottom>Возраст: 0-30 лет</Typography>
						<Slider
							defaultValue={0}
							valueLabelDisplay="auto"
							step={1}
							min={0}
							max={30}
						/>
					</Box>

					<TextField fullWidth select label="Порода" defaultValue="">
						<MenuItem value="labrador">Лабрадор</MenuItem>
						<MenuItem value="british">Британская</MenuItem>
						<MenuItem value="siamese">Сиамская</MenuItem>
					</TextField>

					<TextField fullWidth select label="Окрас" defaultValue="">
						<MenuItem value="black">Черный</MenuItem>
						<MenuItem value="white">Белый</MenuItem>
						<MenuItem value="brown">Коричневый</MenuItem>
					</TextField>

					<FormGroup>
						<FormControlLabel
							control={<Checkbox />}
							label="Кастрация/стерилизация"
						/>
						<FormControlLabel control={<Checkbox />} label="Прививки" />
					</FormGroup>

					<TextField fullWidth select label="Статус" defaultValue="">
						<MenuItem value="help">Нуждается в помощи</MenuItem>
						<MenuItem value="treatment">На лечении</MenuItem>
						<MenuItem value="home">Ищет дом</MenuItem>
					</TextField>

					<Button variant="contained" size="large" sx={{ mt: 2 }}>
						Применить фильтры
					</Button>
				</Box>
			</Paper>

			{/* Правая колонка - список животных с пагинацией */}
			<Paper
				sx={{
					p: 3,
					flex: 2,
					display: "flex",
					flexDirection: "column",
					minHeight: 0,
				}}
			>
				<Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
					Найдено животных: {animals.length}
				</Typography>

				{/* Сетка с карточками */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							md: "repeat(2, 1fr)",
						},
						gap: 3,
						mb: 3,
						flexGrow: 1,
					}}
				>
					{currentAnimals.map((animal) => (
						<Card
							key={animal.id}
							sx={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								transition: "transform 0.2s",
								"&:hover": {
									transform: "translateY(-4px)",
									boxShadow: 3,
								},
							}}
						>
							{/* Фото животного */}
							<Box
								sx={{
									width: "100%",
									height: 250,
									overflow: "hidden",
									position: "relative",
								}}
							>
								<CardMedia
									component="img"
									image={animal.image}
									alt={animal.name}
									sx={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										position: "absolute",
									}}
								/>
							</Box>

							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h6" component="div" gutterBottom>
									{animal.name}
								</Typography>

								<Typography variant="body2" color="text.secondary" gutterBottom>
									{animal.type} • {animal.age} года • {animal.breed}
								</Typography>

								<Typography variant="body2" color="text.secondary">
									Окрас: {animal.color}
								</Typography>

								<Typography variant="body2" color="text.secondary">
									Прививки: {animal.vaccinated ? "✅ Есть" : "❌ Нет"}
								</Typography>

								<Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
									<Typography variant="body2" sx={{ mr: 1 }}>
										Статус:
									</Typography>
									<Typography
										variant="body2"
										sx={{
											color:
												animal.status === "Ищет дом"
													? "success.main"
													: animal.status === "На лечении"
													? "warning.main"
													: "error.main",
											fontWeight: "bold",
										}}
									>
										{animal.status}
									</Typography>
								</Box>
							</CardContent>

							<CardActions
								sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
							>
								<Button
									variant="contained"
									startIcon={<InfoIcon />}
									size="small"
								>
									Подробнее
								</Button>

								<IconButton aria-label="add to favorites">
									<FavoriteBorderIcon />
								</IconButton>
							</CardActions>
						</Card>
					))}
				</Box>

				{/* Пагинация */}
				<Box sx={{ display: "flex", justifyContent: "center", mt: "auto" }}>
					<Pagination
						count={Math.ceil(animals.length / itemsPerPage)}
						page={currentPage}
						onChange={(_, page) => handlePageChange(page)}
						color="primary"
						showFirstButton
						showLastButton
					/>
				</Box>
			</Paper>
		</Box>
	);
}
