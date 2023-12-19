//import the http library

const express = require('express');
const app = express();

//midddle ware
app.use(express.json());

    


const Hostname = '127.0.0.1';
const PORT = 3001;
//make the server to listen the http requests
app.listen(PORT, () => console.log(`Server running at htpp://${Hostname}:${PORT}`));

