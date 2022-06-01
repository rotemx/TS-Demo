import {Color} from "./enum";

let numbers: number[] = [5, 4, 34, 3, 2, 2];

let numbersOrStrings: (number | string)[] = [5, "hello"];

// tuple
type NameAndAgeTuple = [string, number];
type NameAndColorTuple = [string, Color];
type NameAndFunctionTuple = [string, (name:string)=>Color];


let namesAndAges: NameAndAgeTuple[] = [
	["john", 13],
	["john", 13],
	["james", 16]
];

