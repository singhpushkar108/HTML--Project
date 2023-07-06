function convertToNumber(val){
	try{	var res=Number(val);
		if(Number.isNaN(res)){
			throw new error("invalid number");
		}
		else{
			console.log( res);
		}
	}
	catch(error){
		console.log("Invalid number");
	}
}

var str="123";
convertToNumber(str);
convertToNumber("abc");