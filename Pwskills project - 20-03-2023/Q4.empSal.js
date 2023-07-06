class emp{
	constructor(name,position,salary){
		this.name=name;
		this.pos=position;
		this.sal=salary;
	}

	getSalary(){
		return this.sal;
	}

}

const emp1=new emp('Pushkar', 'Analyst', 50000);
console.log(emp1.getSalary());