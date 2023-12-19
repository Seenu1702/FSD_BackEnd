const Note = require('../Models/notes');
const notesRouter = require('express').Router();

//endpoint to view all the notes..
notesRouter.get('/', (request, response) => {
    Note.find({}, {})
        .then(notes =>{
            response.status(200).json(notes);
        })

});

module.exports = notesRouter;