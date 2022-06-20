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
        globalThis["webSqlManager"] = this;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    save(key, value) {
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
    load(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.db.transaction(tx => tx.executeSql("select * from ITEMS", [], (tx, result) => {
                    const { rows } = result;
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].key === key) {
                            return resolve(rows[i].value);
                        }
                    }
                    resolve('Not Found');
                }, (err) => {
                    reject(err);
                    return false;
                }));
            });
        });
    }
}
