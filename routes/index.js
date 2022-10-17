//Routing variable declarations
const express = require('express');

const notesRouter = require('./notes');

const routes = express.Router();
// Only one route required for the single database as of now
routes.use('/notes', notesRouter);

module.exports = routes;