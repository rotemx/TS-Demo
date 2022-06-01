import {Color} from "./enum";

interface Animal {
	name: string;
	age: number;
}

interface Mammal {
	name: string;
	age: number;
	hairColor: Color;
	pregnancyTimeMonths: number;
}

let mammal: Mammal = {
	age                : 2,
	name               : "Johnny",
	hairColor          : Color.Blue,
	pregnancyTimeMonths: 7
};


function printAnimal(animal:Animal) {
	console.log(animal);
}
printAnimal(mammal)

let someMammalProperties:Partial<Mammal> & {address?:string} = {
	age:2,
	address: 'dkahf'
}
