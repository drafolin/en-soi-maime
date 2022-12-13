"use client";

import React from 'react';
import { getLocalStorage } from "../../../utils";
import Image from 'next/image';

const Generate = () => {
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');
	const connectionString = getLocalStorage("connectionString");
	const [created, setCreated] = React.useState(false);
	const [code, setCode] = React.useState('');
	const [id, setId] = React.useState('');

	if (connectionString === "" || connectionString === null) {
		window.location.href = "/admin";
	}

	const handleCreate: React.FormEventHandler = (e) => {
		e.preventDefault();

		fetch(
			"/api/code",
			{
				body: JSON.stringify(
					{
						connStr: connectionString,
						name,
						description
					}
				),
				method: "POST"
			}

		).then(async res => {
			let body = await res.json();
			if (res.status === 200) {
				setCreated(true);
				setCode(body.code);
				setId(body.id);
			} else {
				console.log(body.message);
				alert("Une erreur est survenue. Veuillez contacter un administrateur.");
			}
		}).catch(err => {
			console.log(err);
			alert("Une erreur est survenue. Veuillez contacter un administrateur.");
		});
	};

	return (
		<div>
			<h1>Generate</h1>
			<form onSubmit={handleCreate}>
				<label htmlFor="name">Nom</label>
				<input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<label htmlFor="description">Description</label>
				<input id="description" name="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
				<button type="submit">Créer</button>
			</form>

			{created && (
				<>
					<h2>Code</h2>
					<Image
						width={100}
						height={100}
						alt={"Generated qr code with data: " + code}
						src={`http://api.qrserver.com/v1/create-qr-code/?data=${code}`}
					/>
					<div>Id</div>
					<div>{id}</div>
				</>
			)}
		</div>
	);
};

export default Generate;
