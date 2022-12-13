import { NextApiHandler, NextApiRequest, NextApiResponse } from "next/types";
import { MongoClient } from "mongodb";

export const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const connStr = JSON.parse(req.body).connStr;
		let client = new MongoClient(connStr);
		try {
			client = await client.connect();
		} catch (err) {
			return res.status(403).json("Failed to connect to database");
		} finally {
			await client.close();
		}
		return res.status(200).json("ok");
	}
};

export default handler;
