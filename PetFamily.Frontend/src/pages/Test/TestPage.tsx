import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { AccountsService } from "../../api/accounts";

export function TestPage() {
	const [users, setUsers] = useState<string[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await AccountsService.getUsers();
			setUsers(response);
		};
		fetchUsers();
	}, []);

	return (
		<Paper
			elevation={2}
			sx={{
				mb: 3, // отступ снизу
				borderRadius: 2, // скругленные углы
			}}
		>
			{users.map((user) => (
				<div>{user}</div>
			))}
		</Paper>
	);
}
