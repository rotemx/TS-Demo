class Animal2 { //Base Class
	
					//member param      just param (not a member)
	constructor(public name: string, saveToDb: boolean = false) {
		console.log(`constructing Animal named ${this.name} ..`);
	}
	
	
	//members / properties
	isAlive: boolean;
	age: number;
	
	//method
	walk() {
		console.log(`${this.name} is walking...`);
	}
}

// let animal = new Animal("Yoshi");
// animal.walk();  //Yoshi is walking..

class Mammal2 extends Animal2 { //Derived class
	
	constructor(public name:string) {
		super(name); //base class constructor: super === Animal
		console.log(`constructing Mammal named ${this.name} ...`); //"this" must come after "super" in the constructor
	}
	
	//overriding base class "walk()"
	walk() {
		console.log(`${this.name} is a Mammal`);
		super.walk();   // super is the base class
	}
}
let mammal2 = new Mammal2("Mammy");

mammal2.walk()

