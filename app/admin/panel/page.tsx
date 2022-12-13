"use client";

import { getLocalStorage } from "../../utils";
import Link from 'next/link';

const Panel = () => {
	if (getLocalStorage("connectionString") === "" || getLocalStorage("connectionString") === null) {
		window.location.href = "/admin";
	}

	return (
		<div>
			<h1>Panel</h1>
			<Link href="/admin/panel/generate"> Génerer un code </Link>
			<Link href="/admin/panel/scan"> Scanner un code </Link>
		</div>
	);
};

export default Panel;
