class Bird {
	constructor(name:string, color:string) {
		this.privateProperty = name;
		this.color = color;
	}
	private privateProperty :string //MEMBER PROPERTY
	protected protectedValue :string
	
	color : string
	
	public readonly readOnlyString:string =  "writing to readonly properties is ok only in the constructor";
	
	defineName() {
		this.privateProperty = "someName" // Private is Ok inside the class!
		this.protectedValue = "protected string" //protected is Ok in the same class
	}
}


class Pigeon extends Bird { //Derived class
	constructor(name:string, color:string) {
		super(name, color);
		
		// this.privateProperty = "" // PRIVATE!!
		this.protectedValue = "blah" //Protected is Ok in derived class
	}
}

//access modifiers - PUBLIC, PRIVATE, PROTECTED, READONLY

let bird = new Bird("BigBird", "Red + Blue");

// bird.privateProperty = "private Property" //ERROR ! PRIVATE !!

// bird.name = "BigBird"
// bird.color =  "Red + Blue"

