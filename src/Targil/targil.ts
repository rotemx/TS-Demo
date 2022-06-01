class Animal {

	static allAnimals:Animal[] = [];
	created:Date;
	
	constructor(public name:string, public age:number, public isAlive:boolean) {
		this.created = new Date();
		Animal.allAnimals.push(this);
	}
	
	breath() {}
	
	static isAnimal(something:any):boolean{
		return something instanceof Animal
	}

	static isAnimalAndNotMammal(something:any):boolean{
		return (something instanceof Animal) && !(something instanceof Mammal)
	}
	
	save() {
		let id = `animal_${this.name}_${this.age}_${Number(this.created)}`;
		localStorage.setItem(id, JSON.stringify(this) )
	}
}

class Mammal extends Animal {
	constructor(
		name:string,
		age:number,
		isAlive:boolean,
		
		public hairLen:number,
		public pregnancyPeriod:number) {
		
		super(name, age, isAlive);
		
	}
	breastFeed() {
	
	}
	
	static isMammal(something:any):boolean{
		return something instanceof Mammal
	}
}
let animal = new Animal('animaly', 12, true);
let rexy = new Animal('rexy', 12, true);
let yoshi = new Animal('yoshi', 3, true);
let snaky = new Animal('snaky', 4, false);

console.log(Animal.allAnimals, 'Animal.allAnimals');
let mammal = new Mammal('mammal', 12, true, 2, 9);


console.log(Animal.isAnimal(77), 'Animal.isAnimal(77)');
console.log(Animal.isAnimal(animal), 'Animal.isAnimal(animal)');
console.log(Mammal.isMammal(mammal), 'Mammal.isMammal(mammal)');
console.log('---');
console.log(Animal.isAnimal(mammal), 'Animal.isAnimal(mammal)');
console.log(Mammal.isMammal(animal), 'Mammal.isMammal(animal)');
console.log('---');
console.log(Animal.isAnimalAndNotMammal(animal), 'Animal.isAnimalAndNotMammal(animal)');
console.log(Animal.isAnimalAndNotMammal(mammal), 'Animal.isAnimalAndNotMammal(mammal)');


function feedTheAnimal(animal:Animal):void {

}

feedTheAnimal(mammal)

function feedTheMammal(mammal:Mammal):void {

}

// feedTheMammal(animal)
