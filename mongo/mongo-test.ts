import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('Connected successfully to server');
	
	const db = client.db(dbName);
	
	const collection = db.collection('users');
	
	// the following code examples can be pasted here...
	
	const insertResult = await collection.insertOne({
		user:"Rotem",
		age: 42,
		color: "Red"
	})
	
	console.log(insertResult);
	
	
	return 'done.';
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
