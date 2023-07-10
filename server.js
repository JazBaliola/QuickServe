const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// instance of the express application
const app = express();

// middleware to the express js application. it enables cors for all routes allowing cross site communication 
// between the front-end and back-end
app.use(cors());

// set port use 4000 cuz i use 3000 for the front end
const PORT = 4000;

// db configuration - connecting to the mysql database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prospectnow'
});

// create a promise based version of mysql connection pool. it allows to use promises and async/wait syntax
const promisePool = pool.promise();
 
// defined a route handler for the root path "/" of the server. when get request is made to the root path. the provided
// callback function is executed
app.get('/', async (req, res) => {
  res.status(200).send("Main Backend Route");
});

// Routers - imports the user and admin from their respective files
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
// add the routers - This mount the routers at their respective base path
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// listen to port 
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});