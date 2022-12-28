import mongoose, { Schema, SchemaDefinition } from 'mongoose';

const ProductSchema = new Schema<SchemaDefinition>({
	name: {
		type: String,
		trim: true,
		min: [2, 'name should be minimum two charectors'],
		max: [40, 'maximum 20 charecotrs allowed'],
		required: true,
	},
	photoUrl: [String],
	price: Number,
	inStock: Number,
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
