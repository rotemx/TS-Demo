import {Color2} from "./enum";

interface IPerson {
	name: string;
	age: number;
	isAlive: boolean;
	favoriteColor: Color2;
}

let person:IPerson = {
	name         : "John",
	age          : 54,
	isAlive      : true,
	favoriteColor: Color2.Black
};

let person2:IPerson = {
	name         : "John",
	age          : 54,
	isAlive      : true,
	favoriteColor: Color2.Red
};
