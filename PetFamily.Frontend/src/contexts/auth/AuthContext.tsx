import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { AccountsService } from "../../api/accounts";
import { api } from "../../api/api";
import { User } from "../../models/User";

type AuthContextType = {
	accessToken: string | undefined;
	user: User | undefined;
	login: (email: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
	const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
	const [user, setUser] = useState<User | undefined>(undefined);

	// Устанавливаем интерцептор на ответы сервера
	// Через useLayoutEffect,
	// потому что он код внутри него выполнится после стадии "рендер", но до отрисовки
	useLayoutEffect(() => {
		const refreshInterceptor = api.interceptors.response.use(
			// Если ответ успешен (код лежит в диапазоне от 200 по 299)
			// то ничего не делаем и просто его возвращаем
			(response) => response,
			// Если в ответе ошибка (код вне диапазона 200-299)
			async (error) => {
				// Проверяем, если код ответа 401
				if (error.response?.status === 401) {
					// Если да, то сохраняем параметры исходного запроса
					// Тут лежат URL, headers, тип запроса (get, post и тд),
					// тело запроса, qurey-параметры
					const originalRequest = error.config;

					// пытаемся обновить accessToken через refreshToken
					try {
						// Обращаемся к серверу, к api на обновление токенов
						const response = await AccountsService.refresh();

						// Обновляем accessToken и другие данные из ответа
						// Внимание - это стриггерит интерцептор запросов ниже на обновление
						setAccessToken(response.data.result!.accessToken);
						setUser({
							email: response.data.result!.email,
							id: response.data.result!.id,
						} as User);

						// Меняем заголвок Authorization на новый, со свежим accessToken
						originalRequest.headers.Authorization = `Bearer ${response.data.result!.accessToken}`;

						// Повторяем исходный запрос, но уже со свежим accessToken
						return api(originalRequest);
					} catch {
						// Если во время обновления токенов произошла ошибка,
						//  то accessToken получить через useAuth больше будет нельзя
						setAccessToken(undefined);
					}

					// Не получилось обновить? Пробрасываем ошибку дальше
					// Чтобы потом иметь возможность в коде поймать её через try catch
					return Promise.reject(error);
				}

				// Если ошибка была не 401, просто пробрасываем её дальше
				return Promise.reject(error);
			},
		);

		// Cleanup функция. Без массива зависимостей вызовести 1 раз - в конце жизни приложения
		// Здесь выполняет роль защиты от двойного монтирования (чтобы не отправлять двойные запросы)
		// по логике приложения двойного монтирования не может быть, но оно есть в реакт режиме разработки
		return () => {
			api.interceptors.response.eject(refreshInterceptor);
		};
	}, []); // Зависимостей нет, интецесптор устанавливается один раз в начале работы приложения

	// К каждому запросу добавляем заголовок Authorization с key = accessToken
	useEffect(() => {
		const accessTokenInterceptor = api.interceptors.request.use((config) => {
			// Если accessToken есть, то добавляем его в заголовок Authorization
			config.headers.Authorization = accessToken
				? `Bearer ${accessToken}`
				: // Если нет - оставляем предыдущее значение (пустое или неактуальное)
					config.headers.Authorization;

			return config;
		});

		// Cleanup функция.
		// Будет вызываться при каждом новой вызове функции внутри useEffect
		// т.е при изменении accessToken
		// Также выполнится в конце жизни приложения
		return () => {
			api.interceptors.request.eject(accessTokenInterceptor);
		};
	}, [accessToken]);

	// Async функции возвращают именно Promise
	const login = async (email: string, password: string) => {
		try {
			const response = await AccountsService.login(email, password);

			setAccessToken(response.data.result!.accessToken);
			setUser({
				email: response.data.result!.email,
				id: response.data.result!.userId,
			} as User);
		} catch {
			console.log("error");
		}
	};

	return (
		<AuthContext.Provider value={{ accessToken, user, login }}>
			{children}
		</AuthContext.Provider>
	);
};
