function greet(name){
	return new Promise(
		function(resolve,reject){
			resolve("Hello "+name);
		});
}

greet("Pushkar").then((msg)=>{
	console.log(msg);
});