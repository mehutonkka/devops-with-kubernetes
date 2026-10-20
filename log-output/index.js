const crypto = require("crypto");

const http = require('http');

const PORT = process.env.PORT || 3000;

const randomString = crypto.randomUUID();

const logOutput = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
};

logOutput();
setInterval(logOutput, 5000);

const server = http.createServer((req, res) => {
	const timestamp = new Date().toISOString();
	if (req.method == 'GET' && req.url == '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(`
			<html>
				<body>
					<p>${timestamp}: ${randomString}</p>
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
