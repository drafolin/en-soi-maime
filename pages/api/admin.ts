import { NextApiHandler, NextApiRequest, NextApiResponse } from "next/types";
import mongoose from "mongoose";

export const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const connectionString = JSON.parse(req.body).connStr;
		await mongoose.connect(connectionString);
		if (mongoose.connections[0].readyState === 1) {
			mongoose.disconnect();
			res.status(200).json("ok");
		} else {
			mongoose.disconnect();
			res.status(403).json("Failed to connect to database");
		}
	}
};

export default handler;
