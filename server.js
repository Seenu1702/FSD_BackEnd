//import the http library

const express = require('express');
const app = express();

//midddle ware
app.use(express.json());

let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    },
    {
        id: 2,
        content: 'node.js is a open source',
        important: false
    },
    {
        id: 3,
        content: 'simple web server using node.js',
        important: true
    },
]


app.get('/', (request, response) => {
    response.send('<h1>Notes Application</h1>');

});

app.get('/api/notes', (request, response) => {
    response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    // find the notes with the id
    const note = notes.find(note => note.id == id);
    console.log(note);

    if(note){
        response.status(200).json(note);
    }
    else{
        response.status(404).json({message: 'id does not exist'});
    }
});

app.post('/api/notes', (request, response) => {
    notes = notes.concat(request.body);
    response.status(201).json({message: "new note added successfully.."});
});


const Hostname = '127.0.0.1';
const PORT = 3001;
//make the server to listen the http requests
app.listen(PORT, () => console.log(`Server running at htpp://${Hostname}:${PORT}`));

