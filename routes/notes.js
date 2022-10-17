// Pull the required module functions
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile} = require('../helpers/fsfilehelp');
// Read from file upon a GET request
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Function to post a new note to a list
notes.post('/', (req, res) => {

    const {title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note appended to the list!`);
    }
    else {
        res.error('Error in adding the note!');
    }

});
// Function to delete an existing note from the list
notes.delete('/:id', async (req, res) => {
    const {id} = req.params;
    let currentArray = [];
    await readFromFile('./db/db.json',).then((data) => currentArray = JSON.parse(data));

    const deletedArray = currentArray.filter((note) => note.id !== id);
    
    writeToFile('./db/db.json', deletedArray);
    res.json(`Note has been deleted`);
});

module.exports = notes;