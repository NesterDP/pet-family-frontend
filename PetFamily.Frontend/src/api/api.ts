import axios from "axios";

export const API_URL: string = "http://localhost:5011/api/";

export const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

// Интерцептор для добавления токена в каждый запрос
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("accessToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
