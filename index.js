//CONFIGURATION!!
'use strict'
const http = require("http");
const cars = require('./data');
let allCars = cars.getAll(); //getting full list of the data.js
// let carDetails = cars.getCar();




const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({ extended: true })); // parse form submissions
//END CONFIGURATION!!



// showing homepage in a dynamic file
app.get('/', (req, res) => {
    res.render('home', { cars: allCars });
});


// send plain text response
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('My name is Kevin. I am from Indonesia. This is my 5th quarter in Seattle Central to pursue AAS degree in Website Development. I\'m taking this course because in WEB150 I was only being taught about plain vanilla JS. As this language is really popular among the developers and the application is so extensive, I\'d like to learn more about Node, Vue, React Native and Express.');
});

// send content of 'home' view
app.get('/detail', (req, res) => {
    let detail = cars.getCar(req.query.make)
    res.render('details', { make: req.query.make, car: detail });
    
    // req.query.car is to be passed on home.handlebar
    // display parsed querystring object to the handlebar
    // car is the keyword (key) to be searched more detail
    // becomes ==> detail?car=model
    // car is then an object
});




// define 404 handler
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('ERROR: 404 Not found');
});

app.listen(app.get('port'), () => {
});