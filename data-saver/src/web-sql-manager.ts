import {IDB} from "./interfaces/I-db";

export class WebSqlManager implements IDB {
	
	constructor() {
		globalThis["webSqlManager"] = this;
	}
	
	db: Database;
	
	async init(): Promise<void> {
		console.log("sql init");
		return new Promise((resolve, reject) => {
			this.db = window.openDatabase(Date.now().toString(), "1.0", "My DB", 2 * 1024 * 1024, () => {
				this.db.transaction(function (tx) {
					tx.executeSql("CREATE TABLE IF NOT EXISTS ITEMS(key UNIQUE, value)", [], function (tx) {
						console.log("Table created");
						resolve();
					}, null);
				});
				console.log("Database Created Successfully");
			});
		});
	}
	
	save(key: string, value: any): void {
		console.log("saving to WebSQL...");
		
		this.db.transaction(function (tx) {
			console.log("inserting...");
			tx.executeSql("INSERT INTO ITEMS (key,value) VALUES (?,?)", [key, value], () => {
				console.log("sql statement cb SUCCESS");
			}, function (tx) {
				console.log(tx, " ERR tx");
				return false;
			});
		});
		
	}
	
	
	async load<T>(key: string): Promise<T> {
		return new Promise((resolve, reject) => {
			this.db.transaction(tx => tx.executeSql("select * from ITEMS", [], (tx, result) => {
				const {rows} = result;
				for (let i = 0; i < rows.length; i++) {
					if (rows[i].key === key) {
						return resolve(rows[i].value);
					}
				}
				resolve('Not Found' as unknown as T);
			}, (err)=>{
				reject(err);
				return false
			}));
			
		});
	}
}
