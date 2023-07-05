const http = require('http');
const port = 1515;
const host = "localhost";
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
        res.end('\nresponse received');
    }
});

server.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
});
