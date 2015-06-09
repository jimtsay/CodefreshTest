var http = require('http');
var util = require('util');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, '127.0.0.1');
console.log(util.format('Server running at http://127.0.0.1:%s/', process.env.PORT));