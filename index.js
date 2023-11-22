const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  const fileExtension = url.slice(url.lastIndexOf('.') + 1);

  let contentType;
  switch (fileExtension) {
    case 'html':
      contentType = 'text/html';
      break;
    case 'json':
      contentType = 'application/json';
      break;
    case 'txt':
      contentType = 'text/plain';
      break;
  }

  fs.readFile(`.${url}`, 'utf8', (err, fileContent) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Archivo no encontrado');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fileContent);
  });
});

server.listen(port, () => {
  console.log(`EL SERVIDOR SE ESTA EJECUTANDO EN EL PUERTO http://localhost:${port}/`);
});