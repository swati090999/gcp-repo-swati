const http = require('http');
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('ITS Tech School — GCP ACE Training v2.0 (auto-deployed!)\n');
});
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
