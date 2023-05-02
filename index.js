const express = require("express");
const path = require('path');

const app = express();

// first create a new express app instance
const port = 4000;
app.use(express.urlencoded());
// here mmongoose add
const db = require("./config/mongoose");

// here module create

const TASK = require("./models/Task_ToDO")

// here use router
// we first create a new express app instance and then  
//mount a middleware function using the app.use() method.
//'/' argument specifies that the middleware should be executed for 
//any HTTP request made to the root path of the application.
//The require('./routes') argument specifies the middleware function 
//to be executed for this route, which is defined in the ./routes.js .
//When you require a directory, Node.js automatically looks for an 
//index.js file within that directory, unless a different file is
//specified in the require() function.
//The ./routes.js or routes k ander index.js file exports an instance 
//of an Express.js Router object, which defines the routes and handlers
//for various HTTP requests.

app.use('/', require('./routes'));
app.use('/', require('./routes/index'));


// set up the view engine


//we're using the app.set() method to set two application settings:
//view engine: This sets the view engine used by the application for
//rendering templates. In this case, we're using the EJS (Embedded 
//JavaScript) view engine by setting view engine to 'ejs'.
//views: This sets the directory where the application's view templates 
//are stored. In this case, we're setting views to './views' 
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.urlencoded());


// this line of code allows the server to serve static files from the 
// assets directory and makes them available to the client-side code.
//static file 

app.use(express.static('./assets'))



//The app.listen() method takes two arguments: the port number to listen 
//on, and an optional callback function that is called when the server 
//starts listening for incoming requests.
//The callback function takes one argument: an error object if there was 
//an error starting the server, or null if the server started successfully

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})

