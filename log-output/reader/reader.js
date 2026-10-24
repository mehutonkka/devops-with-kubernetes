const http = require('http');

const PORT = process.env.PORT || 3000;

const fs = require("fs");

const server = http.createServer((req, res) => {
    const content = fs.readFileSync("/usr/src/app/files/log.txt", "utf-8");
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(content);
        return;
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
