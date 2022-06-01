interface IAbstract_DB_Functions{
	save: (obj:any)=>boolean
	load: (obj:any)=>boolean
	delete: (obj:any)=>boolean
}

interface IdObject {
	id: any;
}

class LocalStorageManager implements IAbstract_DB_Functions {
	delete(obj: any): boolean {
		return false;
	}
	
	load(obj: any): boolean {
		return false;
	}
	
	save(obj: IdObject): boolean {
		localStorage.setItem(obj.id, JSON.stringify(obj))
		return true;
	}
	
}

let localStorageManager = new LocalStorageManager();


class Customer {
	id:string;
	constructor(public name :string, public db:IAbstract_DB_Functions) {
		this.id = String(Date.now());
	}
	
	save() {
		this.db.save(this)
	}
}

let customer = new Customer('Johnny', localStorageManager)
