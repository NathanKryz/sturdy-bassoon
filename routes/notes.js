const notes = require('express').Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile} = require('../helpers/fsfilehelp');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
    console.log(req.body);


})

module.exports = notes;