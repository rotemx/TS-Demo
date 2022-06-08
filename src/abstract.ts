export abstract class BaseAnimal{

	age:number
	canFly:boolean;
	
	walk() {
		console.log('walking...'); //concrete code
	}
	
	abstract eat(km:number, direction: 'west' | 'east'):boolean   // needs to be implemented
}

type FlightStatus = "flying" | "standing" | "sleeping";

export class Fish extends BaseAnimal{
	
	eat(km: number, direction: "west" | "east"): boolean {
		return false;
	}
	
	flightStatus:FlightStatus;
	setFlyStatus(status:FlightStatus){
		this.flightStatus = status;
	}
}

// let animal = new Animal(); //not Ok

let fish = new Fish();  //ok

fish.canFly = false;


