const {
	getAllProducts,
	getProductsByPrice,
	getProductById,
	addProduct,
	addProductReview,
} = require('./products.model');

module.exports = {
	Query: {
		products: () => {
			return getAllProducts();
		},
		productsByPrice: (_, args) => {
			return getProductsByPrice(args.min, args.max);
		},
		product: (_, args) => {
			return getProductById(args.id);
		},
	},
	Mutation: {
		addProduct: (_, args) => {
			return addProduct(args.id, args.description, args.price);
		},
		addProductReview: (_, args) => {
			return addProductReview(args.productId, args.id, args.rating, args.comment);
		},
	},
};
