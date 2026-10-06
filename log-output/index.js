const crypto = require("crypto");

const randomString = crypto.randomUUID();

const logOutput = () => {
	const timestamp = new Date().toISOString();
	console.log(`${timestamp}: ${randomString}`);
};

logOutput();

setInterval(logOutput, 5000);
