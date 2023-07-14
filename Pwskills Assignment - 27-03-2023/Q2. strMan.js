function logstring(string) {
		console.log("The manipulated string is:"+string);
	};


function manipulateString( str, func){
	
	var res=str.toUpperCase();
	func(res);

}


var string="hello world";

manipulateString(string, logstring);