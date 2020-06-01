//<<CONFIGURATION!!>>
'use strict'
const http = require("http");
const cars = require('./data');
let allCars = cars.getAll(); //getting full list of the data.js
// let carDetails = cars.getCar();
//--express config
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({ extended: true })); // parse form submissions
//--handlebar config
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
//--mongoDB config
const Car = require("./models/cars");
//<<END CONFIGURATION!!>>


// //Homepage using Express Routes Integration
// app.get('/', (req, res) => {
//   res.render('home', { cars: allCars });
// });


//Homepage using MongoDB Routes Integration
app.get('/', (req, res, next) => {
  Car.find({}).lean()
    .then((cars) => {
      // res.render('home', { cars });
      res.render('home_react', {items: JSON.stringify(cars)});
    })
    .catch(err => next(err));
});


// send plain text response
app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('My name is Kevin. I am from Indonesia. This is my 5th quarter in Seattle Central to pursue AAS degree in Website Development. I\'m taking this course because in WEB150 I was only being taught about plain vanilla JS. As this language is really popular among the developers and the application is so extensive, I\'d like to learn more about Node, Vue, React Native and Express.');
});


// // send content of 'home' (detail page) view using Express
// app.get('/detail', (req, res) => {
//     let detail = cars.getCar(req.query.make)
//     res.render('details', { make: req.query.make, car: detail });

// //     // req.query.car is to be passed on home.handlebar
// //     // display parsed querystring object to the handlebar
// //     // car is the keyword (key) to be searched more detail
// //     // becomes ==> detail?car=model
// //     // car is then an object
//  });





//send content of 'home' (detail page) view using MongoDB
app.get('/detail', (req, res, next) => {
  let searchItem = req.query.make
  Car.findOne({ "make": searchItem }).lean()
    .then((cars) => {
      res.render('details', { cars });

    })
    .catch(err => next(err));
});


//delete an item in MongoDB from a query being passed
app.get('/delete', (req, res) => {
  let deleteItem = req.query.carmake;
  console.log(deleteItem)
  return Car.deleteOne({ "make": deleteItem }).lean()
    .then((resultDeletedItem) => {
      res.set('Content-Type', 'text/html')
      res.send(`<h3>You have deleted ${deleteItem} </h3>
      <h3> Delete count =  ${resultDeletedItem.deletedCount}</h3>
      <p><a href = "/">Home</a></p>`);
    })
    .catch(err => next(err));
});

// set Access-Control-Allow-Origin header for api route
app.use('/api', require('cors')());

// const newCar = { make: 'Jeep', model: 'Wrangler Gen II', engine: '2.0 L 4-cylinder', mpg: 22, msrp: 28295 }
// insert or update a single record
// It will search for make:'Jeep' and if it exists it will replace the found object with 'newCar'.
// And if it's not true it won't do anything since we use upsert:true?
app.post('/api/cars/add', (req, res) => {
  console.log(req.body);
  const newCar = req.body;
  Car.update({ make: newCar.make }, newCar, { upsert: true }, (err, result) => {
    // if (err) return next(err);
    // console.log(result)
    if (result.nModified == 0) {
      console.log("A new car is added")
      res.json({ fileChangedCount: result.nModified })
    } else {
      console.log("File has been updated")
      res.json({ fileChangedCount: result.nModified })
    }

  })
})


//Using API to display all item from MongoDB
app.get('/api/cars/delete', (req, res) => {
  let removeItem = req.query.carmake;
  console.log(removeItem)
  return Car.deleteOne({ "make": removeItem }).lean()
    .then((resultRemoved) => {
      console.log(resultRemoved)
      res.json({ deleted: resultRemoved.deletedCount > 0 }
      )
    })
});

//Using API to display one item from MongoDB
app.get('/api/cars/:make', (req, res) => {
  Car.findOne({ make: req.params.make }).lean()
    .then((car) => {
      res.json(car);
    })
    .catch(err => next(err));
});

//Using API to display all item from MongoDB
app.get('/api/cars', (req, res) => {
  Car.find({}).lean()
    .then((cars) => {
      res.json(cars);
    })
    .catch(err => next(err));
});



//return only car make,model and price
app.get('/api/cars/price', (res) => {
  res.json(Car.find().lean().map((eachCar)
    .then((eachCar => {
      return {
        make: eachCar.make,
        model: eachCar.model,
        price: eachCar.msrp
      }
    })
    ))
  )
});









// define 404 handler
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('ERROR: 404 Not found');
});

app.listen(app.get('port'), () => {
});


/*
Testing getItem, addItem & deleteItem functions

let model = cars.getItem ("Atlas");
console.log(model);

let model1 = cars.addItem ("Camaro");
console.log(model1);

let model2 = cars.deleteItem ("Pilot");
console.log(model2);
*/