// DRY
interface hasAge {
	age:number
}

interface hasName {
	name:string
}

//intersection type
type hasNameAndAge = hasName & hasAge;

let person:hasNameAndAge = {
	name : 'rotem',
	age:42
}
