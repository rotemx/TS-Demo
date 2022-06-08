
export interface IDB {
	save<T>(key: string, value: T): void;
	
	load<T>(key: string): T;
}
