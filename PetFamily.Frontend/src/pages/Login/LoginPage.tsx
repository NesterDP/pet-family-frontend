import { Button, Skeleton, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccountsService } from "../../api/accounts";

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

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [accessToken, setAccessToken] = useState("");
	const [refreshToken, setRefreshToken] = useState("");

	const onSubmit = async (data: LoginFields) => {
		try {
			setIsLoading(true);
			const response = await AccountsService.login(data.email, data.password);
			setAccessToken(response.data.result!.accessToken);
			setRefreshToken(response.data.result!.refreshToken);
			setIsLoading(false);

			localStorage.setItem("accessToken", response.data.result!.accessToken);
		} catch {
			setIsError(true);
			setIsLoading(false);
			console.log("error");
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
					<div
						style={{ overflow: "auto", maxWidth: "100%", whiteSpace: "nowrap" }}
					>
						<div>access token = {accessToken}</div>
						<div>refresh token = {refreshToken}</div>
					</div>
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
							<Button type="submit">Войти</Button>
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
