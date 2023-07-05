var fs = require('fs');
var buf = new Buffer(1024);

console.log('opening an existing file');

fs.open('nodejs_architecture.txt', 'r', function(err, fd) {
  if (err) {
    return console.error(err);
  } else {
    console.log("File opened");
    console.log("Reading the File");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if (err) {
        console.log(err);
      } else {
        if (bytes > 0) {
          console.log(buf.slice(0, bytes).toString());
        }
      }
    });
  }
});
