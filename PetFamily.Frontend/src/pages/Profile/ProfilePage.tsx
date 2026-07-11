import { useAuth } from "../../contexts/auth/useAuth";

export function ProfilePage() {
	const { user } = useAuth();

	return (
		<div className="flex flex-col align-middle">
			<div>User id = {user?.id === undefined ? ".." : user?.id}</div>

			<div>User email = {user?.email === undefined ? ".." : user?.email}</div>
		</div>
	);
}
