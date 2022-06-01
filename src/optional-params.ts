interface Person {
	name:string
	age:number
	children?:Person[]  //optional property
	spouse?: Person
}

/*
let Shlomo:Person = {
	age: 78,
	name : 'Shlomo',
}

let Sara:Person = {
	age: 54,
	name : 'Sara',
	spouse: Shlomo
}
*/
