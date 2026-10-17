const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <body>
                    <h1>todo app</h1>
                    <p>todo listings</p>
                </body>
            </html>
        `);
        return;
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});