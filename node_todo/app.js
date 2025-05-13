const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const db = require('./db');
// const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
// app.use(cors()); // enable CORS for all routes
// app.use(cors({
//     origin: 'http://localhost:3000', // replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// })); // enable CORS for all routes
app.use(bodyParser.json());// parse application/json
app.use('/app/users', userRoutes); // user routes
app.use('/app/todos', todoRoutes); // todo routes
app.use(express.static('public'));// serve static files from public directory

// how to setup db connections and check it is sucessfully setup
db.getConnection((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});
module.exports = app;
