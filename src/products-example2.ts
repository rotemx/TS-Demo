const PRODUCTS2 = [
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


interface IProduct {
	name: string;
	price: number;
}

class Product {
	constructor(product:IProduct) {
		this.name = product.name;
		this.price = product.price * 1.17;
	}
	name:string
	price:number
	buy() {
		//...
	}
}

let items2 = PRODUCTS2.map(product=>{
	return new Product(product)
	
})

console.log(items2, 'items2');
