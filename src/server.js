// server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Búum til þjóninn
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello World! Velkomin í Vefforritun 2.');
});

// Virkjum hlustun á porti 3000
server.listen(port, hostname, () => {
  console.log(`Server keyrir á http://${hostname}:${port}/`);
});