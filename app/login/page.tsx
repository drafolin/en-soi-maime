"use client";
import { useState, useEffect } from "react";

const getLocalStorage = (key: string) => {
	if (typeof window !== "undefined") {
		return window.localStorage.getItem(key);
	} else {
		return null;
	}
};

const setLocalStorage = (key: string, value: string) => {
	if (typeof window !== "undefined") {
		return window.localStorage.setItem(key, value);
	}
};

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [connectionString, setConnectionString] = useState(getLocalStorage("connectionString") || "");

	useEffect(() => {
		setLocalStorage("connectionString", connectionString);
		(
			async () => {
				if (
					(await fetch(
						"/api/admin",
						{
							body: JSON.stringify(
								{
									connStr: connectionString
								}
							),
							method: "POST"
						}
					)).ok) {
					console.log("connected");
				};
			}
		)();
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
