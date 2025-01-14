const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./longTask.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  });

  worker.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`Error: ${err.message}`);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// longTask.js
const { parentPort } = require('worker_threads');

const start = Date.now();
while (Date.now() - start < 5000) {}; // Simulate a long task

parentPort.postMessage('Task completed!');