const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middlewares/error');
const create = require('./middlewares/create');
const verifyFields = require('./middlewares/verifyFields');
const getAll = require('./middlewares/getAll');
const getById = require('./middlewares/getById');
const updateById = require('./middlewares/updateById');

const app = express();

app.use(bodyParser.json());

app.post('/user', verifyFields, create)
app.get('/user', getAll)
app.get('/user/:id', getById)
app.put('/user/:id', verifyFields, updateById)

app.use(error);

const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`App listening on port ${PORT}`); 
});