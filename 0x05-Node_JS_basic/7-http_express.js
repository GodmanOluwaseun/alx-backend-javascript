/**
 * Complex http server created with express.
 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const dbase = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.status(200).end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.status(200).write('This is the list of our students\n');
  try {
    const output = countStudents(dbase);
    res.end(output);
  } catch (error) {
    res.status(500).end('Cannot load the database');
  }
});

app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

app.listen(1245);

module.exports = app;
