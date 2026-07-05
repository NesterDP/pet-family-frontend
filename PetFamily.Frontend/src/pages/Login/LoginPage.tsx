import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

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

	const onSubmit = (data: LoginFields) => {
		console.log(data);
	};

	return (
		<div className="flex flex-col h-full w-full px-10 justify-center items-start gap-4">
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
						label="Пароль"
						fullWidth
						{...register("password")}
					/>
					<Button type="submit">Войти</Button>
				</form>
			</div>
		</div>
	);
}
