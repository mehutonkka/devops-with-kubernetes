const crypto = require("crypto");

const fs = require("fs");

const randomString = crypto.randomUUID();

const logOutput = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
  fs.writeFileSync("/usr/src/app/files/log.txt", `${timestamp}: ${randomString}\n`);
};

logOutput();
setInterval(logOutput, 5000);