var fs=require('fs');
let data="NodeJS is a single-threaded and asynchronous runtime environment used to run server-side applications with JavaScript as its primary language. NodeJS offers a robust architecture that provides seamless operation to run server-side code."

console.log("writing into existing file");

fs.writeFile('nodejs_architecture.txt', data, function(err){
	if(err){
		return console.log(err);
	}
	else{
		console.log("Data written Successfully");
	}
	});