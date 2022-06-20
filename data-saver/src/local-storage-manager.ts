import {IDB} from "./interfaces/I-db";

export class LocalStorageManager implements IDB {
	save(key: string, value: any): void {
		localStorage[key] = JSON.stringify(value);
	}
	
	async load<T>(key: string): Promise<T> {
		return localStorage[key];
	}
}
