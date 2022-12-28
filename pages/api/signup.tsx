import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import User, { UserSchema } from '../../models/User';
import { hash } from 'bcryptjs';

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// await dbConnect();
		const body = req.body;
		if (req.method === 'POST') {
			if (!req.body) {
				res.json({ message: 'no data recieved' });
			}
			let userExist = await User.findOne({ email: body.email });
			if (!userExist) {
				const user: UserSchema = new User();
				user.firstName = body.firstName;
				user.lastName = body.lastName;
				user.email = body.email;
				user.password = await hash(body.password, 12);
				await user.save();
				res.status(200).json(user);
			} else {
				res.status(400).json({ message: 'user already exist' });
			}
		} else {
			res.status(405).send('Invalid HTTP request');
		}
	} catch (error) {
		res.status(500).send('server error');
	}
}
