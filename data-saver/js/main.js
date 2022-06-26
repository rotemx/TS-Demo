// this is the BL (business logic) high-level code
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LocalStorageManager } from "./local-storage-manager.js";
import { WebSqlManager } from "./web-sql-manager.js";
console.log("Starting...");
const $key = $("#key-input"), $load_result = $("#load-result"), $load_button = $("#load-button"), $save_button = $("#save-button"), $load_key_input = $("#load-key-input"), $value = $("#value-input");
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
        return __awaiter(this, void 0, void 0, function* () {
            const key = $load_key_input.val();
            console.log(`loading key ${key}... `);
            const value = yield this.db.load(key);
            $load_result
                .empty()
                .text(value);
        });
    }
}
const 
//dependency
webSQLManager = new WebSqlManager(), //cannot await "new..." - synchronous code!
localStorageManager = new LocalStorageManager(), main = new Main(webSQLManager) //DI
;
globalThis["save"] = main.save.bind(main);
globalThis["load"] = main.load.bind(main);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield webSQLManager.init();
    $load_button.prop("disabled", false);
    $save_button.prop("disabled", false);
}))(); //IIFE - immediately invoked function expression
