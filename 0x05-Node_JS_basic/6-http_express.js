/**
 * HTTP server using Express
 */

const express =  require('express');

const app = express;

app.get('/', (req, res) => {
  res.send('<h>Hello Holberton School!</h>');
});

app.listen(1245);
