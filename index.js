const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  // Leer la ubicacion del archivo desde el url
  const url = req.url;

  try {
    const fileContent = fs.readFileSync(`.${url}`, 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(fileContent);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Archivo no encontrado');
  }
});

server.listen(port, () => {
  console.log(`EL SERVIDOR SE ESTA EJECUTANDO EN EL PUERTO http://localhost:${port}/`);
});