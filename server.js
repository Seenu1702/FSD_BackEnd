const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./Controllers/notes')


//midddle ware
app.use(express.json());


app.use('/api/notes', notesRouter);

module.exports = app;

