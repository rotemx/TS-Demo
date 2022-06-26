import {Db, MongoClient, Collection} from "mongodb";

const URL = "mongodb://localhost:27017";


class MongoManager {
	client: MongoClient;
	db: Db;
	collection: Collection;
	
	constructor() {
	
	}
	
	async init() {
		this.client = new MongoClient(URL);
		this.db     = this.client.db("MyAppDB");
		await this.client.connect();
	}
	
	createCollection(collectionName) {
		return this.db.collection(collectionName);
	}
	
	async save(collection, data): Promise<any> {
		try {
			const result = await collection.insertOne(data);
			console.log("save successful", data, result);
			return result
		} catch (e) {
			console.log("error save");
			console.log(e);
		}
	}
	
	async load(collection) {
		return collection.find({});
	}
	
	async update(collection, id, data) {
		await collection.updateOne({_id: id}, {$set:data});
	}
}

let mongoManager = new MongoManager();
(async () => {
		await mongoManager.init();
		let users = await mongoManager.createCollection("Users");
		let user_save_result = await mongoManager.save(users, {name: "Josh"});
		
		console.log(user_save_result, "user_save_result");
		
		let user_id = user_save_result.insertedId;
		
		let products = await mongoManager.createCollection("Products");
		
		console.log("products");
		console.log(products);
		
		let product_save_result = await mongoManager.save(products, {
			type : "Car",
			model: "Mazda"
		});
		
		console.log("product_save_result");
		console.log(product_save_result);
		
		
		let product_id = product_save_result.insertedId;
		
		await mongoManager.update(users, user_id, {product_id});
		
		
		mongoManager.client.close();
		
	}
)();





















