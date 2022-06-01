interface Human {
	name: string;
	age: number;
	isAlive: boolean;
	dateOfBirth: Date;
	
	spouse?: Human; //optional
	save: () => void;
}

let john: Human = {
	age        : 0,
	dateOfBirth: new Date(),
	isAlive    : false,
	name       : "",
	save() {
		//	db.save...
		// return 8;
	}
};


//Class is concrete code in JS
//Interface is just a type annotation (abstract interface)

// class remains in JS file after compilation
// interface is removed with all type annotations from JS file

// class can have CODE
// interface CANNOT have code

