import { Button, Skeleton, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";

type LoginFields = {
	email: string;
	password: string;
};

export function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFields>();

	const { login, accessToken, isLoading, isError } = useAuth();

	const navigate = useNavigate();
	const onSubmit = async (data: LoginFields) => {
		await login(data.email, data.password);

		navigate("/profile");
	};

	return (
		<>
			{isLoading ? (
				<Skeleton
					animation="wave"
					variant="rectangular"
					width={210}
					height={118}
				/>
			) : (
				<div className="flex flex-col h-full w-full px-10 justify-center items-start gap-4 pt-16">
					<div> {accessToken}</div>
					<div className="flex flex-col flex-1 min-w-80 mx-auto items-center gap-9">
						<form
							className="flex flex-col w-full items-center gap-7"
							onSubmit={handleSubmit(onSubmit)}
						>
							<TextField
								variant="standard"
								label="email"
								error={!!errors.email}
								helperText={errors.email?.message}
								fullWidth
								{...register("email", {
									required: "это поле обязательно для заполнения",
									validate: (value) => {
										if (!value.includes("@")) {
											return "Email должен включать в себя @";
										}
									},
								})}
							/>
							<TextField
								variant="standard"
								error={!!errors.password}
								helperText={errors.password?.message}
								label="Пароль"
								fullWidth
								{...register("password", {
									validate: (value) => {
										if (value.length < 6) {
											return "Пароль должен быть не менее 6 символов";
										}
									},
								})}
							/>
							<Button type="submit" disabled={isLoading}>
								Войти
							</Button>
							<div className="flex flex-col items-center gap-1 mt-2">
								<span>Нет аккаунта?</span>
								<a
									href="/register"
									className="text-blue-600 underline hover:text-blue-800"
								>
									Зарегистрироваться
								</a>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
