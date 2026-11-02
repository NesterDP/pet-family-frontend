import { Alert, Button, Skeleton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth/useAuth";

type RegistrationFeedback = {
	severity: "success" | "error";
	message: string;
};

type RegisterFields = {
	email: string;
	userName: string;
	password: string;
	confirmPassword: string;
};

export function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<RegisterFields>();

	const { userRegister, accessToken, isLoading } = useAuth();
	const navigate = useNavigate();
	const [feedback, setFeedback] = useState<RegistrationFeedback | null>(null);

	useEffect(() => {
		if (feedback?.severity !== "success") {
			return;
		}

		const timeoutId = window.setTimeout(() => navigate("/login"), 1500);
		return () => window.clearTimeout(timeoutId);
	}, [feedback, navigate]);

	const onSubmit = async (data: RegisterFields) => {
		setFeedback(null);

		try {
			const registered = await userRegister(
				data.email,
				data.userName,
				data.password,
			);

			if (registered) {
				setFeedback({
					severity: "success",
					message:
						"Регистрация прошла успешно. Сейчас вы будете перенаправлены.",
				});
			} else {
				setFeedback({
					severity: "error",
					message: "Не удалось зарегистрироваться. Попробуйте ещё раз.",
				});
			}
		} catch {
			setFeedback({
				severity: "error",
				message:
					"Не удалось зарегистрироваться. Проверьте данные и попробуйте ещё раз.",
			});
		}
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
						{feedback?.severity === "success" ? (
							<Alert severity="success">{feedback.message}</Alert>
						) : (
							<>
								{feedback?.severity === "error" && (
									<Alert severity="error">{feedback.message}</Alert>
								)}
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
												const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
												if (!emailRegex.test(value)) {
													return "Некорректный формат email";
												}

												return true;
											},
										})}
									/>

									<TextField
										variant="standard"
										label="Имя пользователя"
										error={!!errors.userName}
										helperText={errors.userName?.message}
										fullWidth
										{...register("userName", {
											required: "это поле обязательно для заполнения",
											validate: (value) => {
												if (value.length < 1) {
													return "Имя пользователя должно содержать минимум 1 символ";
												}
												if (value.length > 256) {
													return "Имя пользователя должно содержать максимум 256 символов";
												}
												if (!/^[A-Za-z0-9]+$/.test(value)) {
													return "Имя пользователя может содержать только буквы и цифры";
												}

												return true;
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
												if (!/[A-Z]/.test(value)) {
													return "Пароль должен содержать минимум 1 заглавную букву";
												}
												if (!/[0-9]/.test(value)) {
													return "Пароль должен содержать минимум 1 цифру";
												}
												if (!/[^A-Za-z0-9]/.test(value)) {
													return "Пароль должен содержать минимум 1 специальный символ";
												}

												return true;
											},
										})}
									/>
									<TextField
										variant="standard"
										error={!!errors.confirmPassword}
										helperText={errors.confirmPassword?.message}
										label="Пароль еще раз"
										fullWidth
										{...register("confirmPassword", {
											validate: (value) => {
												const password = getValues("password");
												if (value !== password) {
													return "Пароли не совпадают";
												}
											},
										})}
									/>
									<Button type="submit" disabled={isLoading}>
										Зарегистрироваться
									</Button>
									<div className="flex flex-col items-center gap-1 mt-2">
										<span>Уже есть аккаунт?</span>
										<a
											href="/login"
											className="text-blue-600 underline hover:text-blue-800"
										>
											Войти
										</a>
									</div>
								</form>
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
}
