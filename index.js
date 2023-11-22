const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  // Al usar un callback la respuesta se enviara al cargar el archivo
  // Este codigo permite solicitudes concurrentes no tiene que esperar la respuesta para empezar a procesar otra 
  fs.readFile(`.${url}`, 'utf8', (err, fileContent) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Archivo no encontrado');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fileContent);
  });
});

server.listen(port, () => {
  console.log(`EL SERVIDOR SE ESTA EJECUTANDO EN EL PUERTO http://localhost:${port}/`);
});