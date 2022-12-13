"use client";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [connectionString, setConnectionString] = useState(getLocalStorage("connectionString") || "");

	useEffect(() => {
		setLocalStorage("connectionString", connectionString);
		fetch(
			"/api/admin",
			{
				body: JSON.stringify(
					{
						connStr: connectionString
					}
				),
				method: "POST"
			}
		).then(res => res.ok)
			.then(ok => {
				if (ok) {
					window.location.href = "/admin/panel";
				}
			});
	}, [connectionString]);

	return (
		<>
			<h1>Login</h1>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setConnectionString(`mongodb://${username}:${password}@localhost:27017`);
				}}
			>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					value={username}
					onChange={(event) => setUsername((event.target as any).value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					value={password}
					onChange={(event) => setPassword((event.target as any).value)}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	);
};

export default LoginPage;
