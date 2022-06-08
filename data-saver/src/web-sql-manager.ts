export class WebSqlManager {
	
	constructor() {
	}
	
	db: Database;
	
	async init(): Promise<void> {
		console.log("sql init");
		return new Promise((resolve, reject) => {
			this.db = window.openDatabase("mydb6", "1.0", "My DB", 2 * 1024 * 1024, () => {
				this.db.transaction(function (tx) {
					tx.executeSql("CREATE TABLE IF NOT EXISTS Items(key UNIQUE, value)", [], function (tx) {
						console.log('Table created');
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
			tx.executeSql('INSERT INTO Items (key,value) VALUES ("myKey", "myValuer"'), [key, value];
		});
		
	}
	
	
	load(key: string): any {
		//todo: implement fn
		
		return "data from WebSQL";
	}
}
