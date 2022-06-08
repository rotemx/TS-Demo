// this is the BL (business logic) high-level code

import {LocalStorageManager} from "./local-storage-manager.js";
import {WebSqlManager}       from "./web-sql-manager.js";
import {IDB}                 from "./interfaces/I-db";

console.log("Starting...");

const
	$key            = $("#key-input"),
	$load_result    = $("#load-result"),
	$load_button = $("#load-button"),
	$save_button = $("#save-button"),
	$load_key_input = $("#load-key-input"),
	$value          = $("#value-input");


class Main {
	constructor(public db: IDB) {
	}
	
	save<T>(): void {
		const
			key   = <string>$key.val(),
			value = <string>$value.val();
		
		console.log(`SAVING ${key} with value ${value}  ...`);
		this.db.save(key, value);
	}
	
	load<T>(): void {
		const key = $load_key_input.val();
		
		console.log(`loading key ${key}... `);
		
		const value = this.db.load<T>(key as string);
		
		$load_result
			.empty()
			.text(<string><unknown>value);
	}
}

const
	//dependency
	webSQLManager       = new WebSqlManager(),
	localStorageManager = new LocalStorageManager(),
	main                = new Main(webSQLManager) //DI
;

globalThis["save"] = main.save.bind(main);
globalThis["load"] = main.load.bind(main);


(async () => {
		await webSQLManager.init();
		$load_button.prop('disabled', false);
		$save_button.prop('disabled', false);
		
	}

)(); //IIFE




