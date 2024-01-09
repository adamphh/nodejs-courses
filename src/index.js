const express = require('express');
const morgan = require('morgan');
const path = require('path')

const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (req, res) => {
    console.log(`Example app listening on port ${port}!`);
});

