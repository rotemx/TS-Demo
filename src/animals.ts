import {Color} from "./enum";

interface Animal {
	name: string;
	age: number;
	isAlive: boolean;
	height: number;
	hairLength: number;
}

interface Mammal extends Animal{
	hairColor:Color
	pregnancyPeriodMonths:number
}
//intelliJ
let rexy:Mammal = {
	age                  : 8,
	hairColor            : Color.Black,
	hairLength           : 0,
	pregnancyPeriodMonths: 0,
	name                 : "",
	isAlive              : false,
	height               : 0
}
