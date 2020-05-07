'use strict';

const Cars = require("./cars");

// return all records that match a condition

Cars.find({'make':'Toyota'}, (err, items) => {
    if (err) return next(err);
    console.log(items.length);
    // other code here
   });


// return one record
Cars.findOne({'engine':'3.0 L 6-cylinder'}, (err, item) => {
  if (err) return next(err);
  console.log("findOne");
  console.log(item);
  // other code here
}); 

// return multiple records
Cars.find({'engine':'3.0 L 6-cylinder'}, (err, item) => {
  if (err) return next(err);
  console.log("find ==>");
  console.log(item);
  // other code here
});


// // insert or update a single record
// var newCar = {make: 'Chevrolet', model: 'Camaro', engine: '2.0 L 4-cylinder', mpg: 22, msrp: 25990}
// Cars.update({make: 'Chevrolet'}, newCar, {upsert:true}, (err, result) => {
//   if (err) return next(err);
//   console.log(result);
//   // other code here
// }); 
