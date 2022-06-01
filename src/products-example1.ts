const PRODUCTS = [
	{
		name : 'tomato',
		price:5
	},
	{
		name : 'cucumber',
		price:4
	},
	{
		name : 'lettuce',
		price:2
	},
]




let buy = {
	//...
}

let items = PRODUCTS.map(product=>{

	return {
		name: product.name,
		price: product.price * 1.17,
		buy:buy
	}
})

console.log(items, 'items');
