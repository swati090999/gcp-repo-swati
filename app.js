const http = require('http');
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('ITS Tech School -- GCP ACE Training v2.0\n');
}).listen(PORT, () => console.log(`Listening on ${PORT}`));
