var fs=require('fs');

console.log("deleting...");

fs.unlink('nodejs_architecture.txt', function(err){
	if(err){
		return console.error(err);
	}
	else{
		console.log("File Deleted Successfully");
	}

});
