// hello-msc/index.js
const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Authors')
const app = express();
require('dotenv').config()

app.use(bodyParser.json());

app.get('/authors',Author.getAll );

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor );

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});