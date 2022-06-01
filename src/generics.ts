

//INFERRING - to infer
let num= 8;

// num = true; //inferring - error;

function wrapAnythingInObject<T = string>(anything:T):{item:T}{
	return {item:anything}
}

let result = wrapAnythingInObject<number>(7);

let result2 = wrapAnythingInObject<string>('hello');

let {item} = result;// equivalent to:  let item = result.item
let {item:item2} = result2;

// WHAT IS THE TYPE OF "ITEM" ????


console.log(result, 'result');
