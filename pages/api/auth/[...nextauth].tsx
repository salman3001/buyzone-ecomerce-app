import NextAuth from 'next-auth';
import CredentailProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import { compare } from 'bcryptjs';

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentailProvider({
			name: 'credentials',
			credentials: {},
			async authorize(credential, req) {
				await dbConnect();
				const user = await User.findOne({ email: credential?.email });
				if (user) {
					let authorized = await compare(credential?.password, user.password);
					if (authorized) {
						return { _id: user._id, name: user.firstName };
					}
				}
				return null;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
});
