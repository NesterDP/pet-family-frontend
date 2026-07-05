import axios from "axios";

const API_URL: string = "http://localhost:5011/api/";

export async function getUsers() {
	const response = await axios.get<string[]>(API_URL + "users");

	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
	await sleep(3000);

	return response.data;
}
