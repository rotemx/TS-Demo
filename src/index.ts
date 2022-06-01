

// Dynamic typing - JS
let xx = 'string';
// xx = 8;

// Static Typing
let myNum:number = 8;

// muNum = 'str'; //error -



let myVar: number = 98;






let x;

function multiply(x: number, y: number): number {
	return x * y;
}

const myFunc = (a: boolean, b: boolean): number => {
	return 9;
};

multiply(3, 2);

let myArray: string[]     = [];
let my2DArray: string[][] = [[], ['3']];

// Type alias
type TwoBooleansToNumberFunction = (a: boolean, b: boolean) => number;

let myFuncCopy: TwoBooleansToNumberFunction = myFunc;

let myFuncCopy2: TwoBooleansToNumberFunction = myFunc;

// DRY - Do not repeat yourself! !!!!!!!!!!!!!

let myAnyVar:any = '';










