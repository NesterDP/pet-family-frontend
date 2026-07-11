import { Paper } from "@mui/material";
import { useEffect } from "react";
import { api } from "../../api/api";

export function TestPage() {
	// const [users, setUsers] = useState<string[]>([]);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const response = await AccountsService.getUsers();
	// 		setUsers(response);
	// 	};
	// 	fetchUsers();
	// }, []);

	useEffect(() => {
		api.post("Accounts/test").then((response) => {
			console.log(response);
		});
	}, []);

	return (
		<Paper
			elevation={2}
			sx={{
				mb: 3, // отступ снизу
				borderRadius: 2, // скругленные углы
			}}
		>
			{/* {users.map((user) => (
				<div>{user}</div>
			))} */}
		</Paper>
	);
}
