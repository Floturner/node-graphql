const orders = [
	{
		date: '2022-04-07',
		subtotal: 49.99,
		items: [
			{
				product: {
					id: 'redshoe',
					description: 'Red Shoe',
					price: 49.99,
				},
				quantity: 1,
			},
		],
	},
	{
		date: '2022-04-07',
		subtotal: 199.99,
		items: [
			{
				product: {
					id: 'pinkbag',
					description: 'Pink Bag',
					price: 199.99,
				},
				quantity: 1,
			},
		],
	},
];

function getAllOrders() {
	return orders;
}

module.exports = {
	getAllOrders,
};
