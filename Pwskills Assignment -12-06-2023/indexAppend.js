var fs = require('fs');
var buf = new Buffer.alloc(1024);
var data = "\n Node.js allows programmers to develop server-side JavaScript and frontend JavaScript codes with simplicity. One of the major node. js advantages is that it eliminates the need for two resource teams, saving time, money, and energy for overall project development.";

fs.appendFileSync('nodejs_architecture.txt', data, 'utf8', function(err) {
    if (err) {
       	console.log( err);
    } else {
        console.log("Data is appended to file");
    }
});


fs.open('nodejs_architecture.txt', 'r', function(err, fd) {
            if (err) {
                return console.log(err);
            } else {
                console.log("File opened");
                console.log("Reading the File......");

                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                    if (err) {
                        console.log(err);
	        console.log("fd: "+fd);
                    } else {
                        if (bytes > 0) {
                            console.log(buf.slice(0, bytes).toString());
                        }
                    }
                });
            }
        });