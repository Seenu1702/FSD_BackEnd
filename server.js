//import the http library

const express = require('express');
const app = express();

const notes = [
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
    response.send('Hello Wold');

});



const PORT = 3001;
//make the server to listen the http requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

