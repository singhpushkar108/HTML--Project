function getPerson(obj){
	try{
		if(typeof obj==='object'){
			if ('name' in obj  &&  'age' in obj){
				return `Name: ${obj.name},Age: ${obj.age}.` ;
			}
			else{
				throw new Error("invalid Parameter type");	
			}
		
		}
		else{
			throw new Error("invalid Parameter type");
		}

	}
	catch(err){
		return err.message;
	}
}


let obj=[
  'John',30]

console.log(getPerson(obj));