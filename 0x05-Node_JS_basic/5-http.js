/**
 * Complex http server.
 */

const http = require('http');
const countStudents = require('./3-read_file_async.js');

const dbase = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(dbase)
      .then((output) => {
        res.write(output);
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: Page Not Found');
  }
});

app.listen(1245);

module.exports = app;
