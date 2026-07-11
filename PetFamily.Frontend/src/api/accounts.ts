import axios, { AxiosResponse } from "axios";
import { Envelope } from "../models/Envelope";
import { LoginResponse } from "../models/LoginResponse";
import { api } from "./api";

const API_URL: string = "http://localhost:5011/api/";

export class AccountsService {
	static async getUsers() {
		const response = await axios.get<string[]>(API_URL + "users");

		const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
		await sleep(3000);

		return response.data;
	}

	static async login(
		email: string,
		password: string,
	): Promise<AxiosResponse<Envelope<LoginResponse>>> {
		return api.post<Envelope<LoginResponse>>("accounts/login", {
			email,
			password,
		});
	}

	// Вызываем именно стандартный экземпляр axios, а не api
	// Чтобы избежать бесконечных попыток получить новый токен
	static async refresh() {
		return axios.post<Envelope<LoginResponse>>(
			API_URL + "accounts/refresh",
			{},
			{
				withCredentials: true,
			},
		);
	}
}
