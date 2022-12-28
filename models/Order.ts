import mongoose, { SchemaDefinition } from 'mongoose';

const orderSchema = new mongoose.Schema<SchemaDefinition>(
	{
		products: [
			{
				type: mongoose.Types.ObjectId,
				ref: 'Product',
			},
		],
		deliveryAddress: {
			Builidng: {
				type: String,
				required: true,
			},
			street: {
				type: String,
				required: true,
			},
			city: {
				type: String,
				required: true,
			},
			pin: Number,
			addressLine: String,
			country: String,
		},
		status: {
			type: String,
			enum: ['Pending', 'Confirmed', 'Delivered'],
		},
		payment: {
			mode: {
				type: String,
				enum: ['cod', 'card'],
			},
			paid: Boolean,
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
