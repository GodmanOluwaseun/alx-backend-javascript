/**
 * Complex http server created with express.
 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const dbase = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(dbase);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.statusCode = 500;
    res.send('Cannot load the database');
  }
});

app.use((req, res) => {
  res.statusCode = 404;
  res.send('404: Page Not Found');
});

app.listen(1245);

module.exports = app;
