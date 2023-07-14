class car{
	constructor(comp, mod,yr){
		this.company=comp;
		this.model=mod;
		this.year=yr;
	}
	
	getDescription(){
		console.log(`This is a ${this.year} ${this.company} ${this.model}`);
	}	

}


const skoda= new car('skoda','rapid',2022);
skoda.getDescription();

const myCar = new car('Toyota', 'Camry', 2022);
myCar.getDescription();	