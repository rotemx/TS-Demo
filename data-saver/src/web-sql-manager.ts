export class WebSqlManager {
	
	constructor() {
	}
	
	db: Database;
	
	async init(): Promise<void> {
		console.log("sql init");
		return new Promise((resolve, reject) => {
			this.db = window.openDatabase(Date.now().toString(), "1.0", "My DB", 2 * 1024 * 1024, () => {
				this.db.transaction(function (tx) {
					tx.executeSql("CREATE TABLE IF NOT EXISTS ITEMS(key UNIQUE, value)", [], function (tx) {
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
			console.log('inserting...');
			tx.executeSql('INSERT INTO ITEMS (key,value) VALUES (?,?)',[key,value],()=>{
			    console.log('sql statement cb SUCCESS');
			}, function (tx){
			    console.log(tx, ' ERR tx');
				return false
			}) ;
		});
		
	}
	
	
	load(key: string): any {
		//todo: implement fn
		
		return "data from WebSQL";
	}
}
