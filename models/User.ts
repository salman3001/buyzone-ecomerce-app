import mongoose, { Schema, SchemaDefinition, Document } from 'mongoose';

export interface UserSchema extends Document {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isAdmin: boolean;
}

const userSchema = new Schema<UserSchema>(
	{
		firstName: {
			type: String,
			required: [true, 'Field first name is required'],
			maxlength: [20, 'Name cannot be more than 20 characters'],
			trim: true,
		},
		lastName: {
			type: String,
			required: [true, 'Field last name is required'],
			maxlength: [20, 'Name cannot be more than 20 characters'],
			trim: true,
		},
		email: {
			type: String,

			lowercase: true,
			unique: true,
			validate: {
				validator: function (v: string) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: 'Not a valid email',
			},
			trim: true,
		},
		password: {
			type: String,
			requir: [6, 'Password should be minimum 6 charectors'],
			max: [12, 'password should be maximum 20 charectors'],
			trim: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model<UserSchema>('User', userSchema);

export default User;
