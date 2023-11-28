const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to New York!!');
    } else if (req.url === '/about') {
        res.end('You seem to be a swiftie');
    } else {
        res.end(`
            <h1>Oops!!</h1>
            <p>Nice to meet you. Where have you been?</p>
            <a href="/">back home</a>
        `);
    }
});

server.listen(5000);  // Server is listening on port 5000
