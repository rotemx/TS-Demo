var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class WebSqlManager {
    constructor() {
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    save(key, value) {
        console.log("saving to WebSQL...");
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO Items (key,value) VALUES ("myKey", "myValuer"'), [key, value];
        });
    }
    load(key) {
        //todo: implement fn
        return "data from WebSQL";
    }
}
