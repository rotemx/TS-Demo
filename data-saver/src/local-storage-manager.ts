import {IDB} from "./interfaces/I-db";

export class LocalStorageManager implements IDB {
	save(key: string, value: any): void {
		localStorage[key] = JSON.stringify(value);
	}
	
	load(key: string): any {
		return localStorage[key];
	}
}
