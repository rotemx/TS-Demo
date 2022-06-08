// this is the BL (business logic) high-level code
import { LocalStorageManager } from "./local-storage-manager.js";
import { WebSqlManager } from "./web-sql-manager.js";
console.log("Starting...");
const $key = $("#key-input"), $load_result = $("#load-result"), $load_key_input = $("#load-key-input"), $value = $("#value-input");
class Main {
    constructor(db) {
        this.db = db;
    }
    save() {
        const key = $key.val(), value = $value.val();
        console.log(`SAVING ${key} with value ${value}  ...`);
        this.db.save(key, value);
    }
    load() {
        const key = $load_key_input.val();
        console.log(`loading key ${key}... `);
        const value = this.db.load(key);
        $load_result
            .empty()
            .text(value);
    }
}
const 
//dependency
webSQLManager = new WebSqlManager(), localStorageManager = new LocalStorageManager(), main = new Main(localStorageManager);
globalThis["save"] = main.save.bind(main);
globalThis["load"] = main.load.bind(main);
main.save();
