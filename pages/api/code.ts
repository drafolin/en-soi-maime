import mongodb, { MongoClient } from 'mongodb';
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next/types";

interface Code {
	code?: string,
	name: string,
	description: string,
	used: boolean,
	_id?: mongodb.ObjectId;
}

export const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { code, connStr, toggle } = req.query;
		if (!req.query.code || !req.query.connectionStr) {
			return res.status(400).json({ message: "Bad request" });
		}

		let client = new MongoClient(<string>connStr);

		try {
			await client.connect();
		} catch (err) {
			client.close();
			return res.status(403).json("Failed to connect to database");
		}
		let record = await client
			.db("ensoimaime")
			.collection<Code>("codes")
			.findOne({ code: code });

		if (!toggle) {
			client.close();
			return record ? (
				record.used ?
					res.status(418).json({ message: "Code already used" }) :
					res.status(200).json({
						message: "Code valid",
						name: record.name,
						description: record.description
					})) :
				res.status(418).json({ message: "Code not found" });
		}

		if (record) {
			if (record.used) {
				client.close();
				return res.status(418).json({ message: "Code already used" });
			}
			await client
				.db("ensoimaime")
				.collection<Code>("codes")
				.updateOne({ code }, { used: true });
			client.close();
			return res.status(200).json({ message: "Code state toggled!" });
		}
		client.close();
		return res.status(418).json({ message: "Code not found" });
	} else if (req.method === "POST") {
		const { name, description, connStr } = JSON.parse(req.body);
		if (!name || !description || !connStr) {
			return res.status(400).json({ message: "Bad request" });
		}

		let client = new MongoClient(<string>connStr);

		try {
			await client.connect();
		} catch (err) {
			client.close();
			return res.status(403).json("Failed to connect to database");
		}

		let insertion;

		try {
			insertion = await client.db("ensoimaime").collection<Code>("codes").insertOne({
				description,
				name,
				used: false,
			});
		} catch (err) {
			client.close();
			return res.status(500).json({ message: "Failed to create code\n\t@code.ts:84\n\nBase exception: " + err.message });
		}

		try {
			await client.db("ensoimaime").collection<Code>("codes").updateOne(
				{ _id: insertion.insertedId },
				{ $set: { code: (insertion.insertedId.toHexString() + name + description).replace(/\s/g, "").slice(0, 32) } }
			);
		} catch (err) {
			client.close();
			return res.status(500).json({ message: "Failed to create code\n\t@code.ts:94\n\nBase exception: " + err.message });
		}

		let code = await client.db("ensoimaime").collection<Code>("codes").findOne({ _id: insertion.insertedId });
		if (!code) {
			client.close();
			return res.status(500).json({ message: "Failed to create code\n\t@code.ts:100" });
		}

		client.close();
		return res.status(200).json({ message: "Code created!", code: code.code, id: code._id });

	} else {
		return res.status(405).json({ message: "Method not allowed" });
	}
};

export default handler;
