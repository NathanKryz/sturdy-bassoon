const express = require('express');

const notesRouter = require('./notes');

const routes = express.Router();

routes.use('/notes', notesRouter);

module.exports = routes;