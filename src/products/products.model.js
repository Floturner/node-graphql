const products = [
	{
		id: 'redshoe',
		description: 'Red Shoe',
		price: 49.99,
		reviews: [],
	},
	{
		id: 'graycarpet',
		description: 'Grey Carpet',
		price: 54.99,
		reviews: [],
	},
	{
		id: 'pinkbag',
		description: 'Pink Bag',
		price: 199.99,
		reviews: [],
	},
];

function getAllProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	return products.filter((product) => product.price >= min && product.price <= max);
}

function getProductById(id) {
	return products.find((product) => product.id === id);
}

function addProduct(id, description, price) {
	const newProduct = {
		id,
		description,
		price,
		reviews: [],
	};

	products.push(newProduct);
	return newProduct;
}

function addProductReview(productId, id, rating, comment) {
	const product = getProductById(productId);

	if (product) {
		const newReview = {
			id,
			rating,
			comment,
		};
		product.reviews.push(newReview);

		return newReview;
	}

	return null;
}

module.exports = {
	getAllProducts,
	getProductsByPrice,
	getProductById,
	addProduct,
	addProductReview,
};
