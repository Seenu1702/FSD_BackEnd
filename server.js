//import the http library


const express = require('express');
const app = express();
const mongoose = require('mongoose');

//midddle ware
app.use(express.json());

const url = `mongodb+srv://Seenu1702:Seenu17021999@cluster0.jcjnftk.mongodb.net/B48_DB`;

console.log('Connecting to DB...');

mongoose.connect(url)
    .then(() =>{
        console.log('Connected to MongoDB...');
    })
    .catch(()=>{
        console.error('Error connecting to DB', error);
    })

// define a schema
const noteSchema = new mongoose.Schema({
    id: Number,
    content: String,
    important: Boolean
})

// create a model
const Note = mongoose.model('Note', noteSchema, 'notes');
//endpoint to view all the notes..
app.get('/api/notes', (request, response) => {
    Note.find({}, {})
        .then(notes =>{
            response.status(200).json(notes);
        })

});




const Hostname = '127.0.0.1';
const PORT = 3001;
//make the server to listen the http requests
app.listen(PORT, () => console.log(`Server running at htpp://${Hostname}:${PORT}`));

