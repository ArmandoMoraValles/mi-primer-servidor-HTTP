const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hola, Mundo!');
});

server.listen(PORT, () => {
  console.log(`EL SERVIDOR SE ESTA EJECUTANDO EN EL PUERTO http://localhost:${PORT}/`);
});