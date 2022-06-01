class Person {
	constructor(name:string) {
		this.name = name;
	}
	name:string
	age : number
	isAlive:boolean
	dateOfBirth:Date
	
	spouse?:Person //optional
	
	walk() {
		console.log(`${this.name} is walking...`);
	}
}



let james = new Person("James") //instance

// john.name = "John"

// number = 7, 8, 11, 19...
// boolean = true, false
// null = null
// undefined = undefined
// Person = ......john, elmo, cookieMonster.... //instances

// JS built-in types:
// number, string, boolean, null, undefined, BigInt, Symbol, Function, Literal Object {}

// Class is complex type - Object that has properties and methods. (prototype)
// Class is an extension of "type"

// Built-in classes in JS:
// Date XHRRequest, Boolean, Number, String, BigInt, Array,
// new String()

// User Defined classes:
// MyClass, Product, ...
