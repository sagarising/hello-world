const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url.includes('/user')){
	res.end(`Hello ${req.url.split('/').reverse()[0]}`)
  } else if (req.url.includes('/org')){
	res.end(`Hello Word with love from ${req.url.split('/').reverse()[0]}`)
  } else {
	
  	res.end('Hello World');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
