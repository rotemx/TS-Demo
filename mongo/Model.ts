import {Db, MongoClient, Collection} from "mongodb";

const URL = "mongodb://localhost:27017";


abstract class BaseModel {
	static client: MongoClient;
	static db: Db;
	static collection: Collection;
	
	constructor(public collectionName: string, public data: any) {
		BaseModel.collection = BaseModel.db.collection(collectionName);
		this.save();
	}
	
	static async init(): Promise<any> {
		BaseModel.client = new MongoClient(URL);
		BaseModel.db     = BaseModel.client.db("MyAppDB");
		await BaseModel.client.connect();
	}
	
	async save() {
		const result = await BaseModel.collection.insertOne(this.data);
		console.log("save successful", result);
	}
}


class Product extends BaseModel {
	constructor(public data: any) {
		super("Products", data);
	}
}

(async () => {
		try {
			await BaseModel.init();
			// client is connected
			
			let product = new Product({
				maker: "Mazda",
				type : "Car",
				color: "Red"
			});
			await product.save();
			await BaseModel.client.close();
			
		} catch (e) {
			console.error("error", e);
		}
	}
)(); //IIFE

