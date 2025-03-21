const express = require('express');
const cors = require('cors');
const app = express();
const {db} = require('./db_conn/db');
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

require('fs').readdirSync('./routs').map((route) => app.use('/', require('./routs/' + route)))

const server = () => {
    
    db();
    app.listen(PORT, () =>{
        console.log('server is listening on port', PORT);
    })
}

server()