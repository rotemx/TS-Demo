class Fish {
	//MEMBER
	name:string
	
					//CTOR PARAM
	constructor(name:string, saveToDb:boolean = false) {
		
		//ASSIGNMENT
		this.name = name;
	}
}

class Dinasour {
	
	// now "name" is both a ctor param AND a member
		constructor(public name:string) {
	}
}

let dino = new Dinasour('Yoshi');

console.log(dino.name); //Yoshi


