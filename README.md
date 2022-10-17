# sturdy-bassoon

## Description

This application is a simple and easy-to-use notetaking application, allowing for users to write notes to be saved to a list for viewing later, and delete previously
written notes to free up space for more notes. Assembled with express.js for the backend, the notes will persist between sessions as each is saved from a database that is stored, and can handle GET, POST, and DELETE requests respectively within its functionality. This application was a good exercise in practising how one can integrate
user inputs on a front-end program into back end responsiveness, as well as handling routing for multiple html pages.

## Installation

For installation, please make sure you have cloned the repository to begin with, from there, make sure to install the module packages with 'npm install'. Should that
fail, you will need to install the two dependancies manually, the two being express.js through 'npm install express' and UUID through 'npm install uuid'. From there you
can either use the chrome dev tools or a API simulator to work with testing and development.

## Usage

Upon launching the app, you will be brought to the landing page, from there you can click on the 'Get Started' button to be taken to the note page. From there, clicking
the '+' button in the top right will provide a blank template for a user to input the title of the note, and a more detailed body, pressing the save icon from there will
add the note to the column on the left, displaying its title. Clicking on any note in the left column will bring it up to the right, allowing users to view the detailed
body associated with the given note. Pressing the red button on a given note will delete it from the list and the database. Finally, pressing the 'Note Taker' button
in the top left will take users back to the landing page.



## Credits

[Express.js](https://expressjs.com/)

[UUID](https://www.npmjs.com/package/uuid)

## License

This application is licensed by the MIT license.
