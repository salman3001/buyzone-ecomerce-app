// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect';
import mongoose from 'mongoose';
import User from '../../models/User';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResData = {
	msg?: unknown;
	user?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
	const { method } = req;
	await dbConnect();

	switch (method) {
		case 'POST':
			try {
				const user = await User.create(req.body);
				res.status(200).json({ msg: 'suceess' });
				break;
			} catch (error) {
				res.json({ msg: error });
			}

		case 'GET':
			try {
				const user = await User.findById(req.body.id);
				res.status(200).json({ user: user });
				break;
			} catch (error) {
				res.json({ msg: error });
			}

		default:
			break;
	}
}
