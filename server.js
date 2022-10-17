// Variable declaration/requirement library acquistion
const express = require('express');
const path = require('path');
const api = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
// Configure the base API routing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));
// Set a URL route through /notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// Wildcard route to catch any other inputs to go to the landing page
app.get('*', (req, rest) =>
    rest.sendFile(path.join(__dirname, '/public/index.html'))
);
// Designates the port for local testing.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);