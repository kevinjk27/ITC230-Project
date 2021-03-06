let cars = [
    { make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990 },
    { make: 'Volkswagen', model: 'Atlas', engine: '3.6 L V6', mpg: 20, msrp: 31545 },
    { make: 'BMW', model: 'M3', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 67495 },
    { make: 'Land Rover', model: 'Range Rover Velar', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 56300 },
    { make: 'Audi', model: 'Q7', engine: '2.0 L 4-inline', mpg: 20, msrp: 54800 },
    { make: 'Honda', model: 'Pilot', engine: '3.5 L V6', mpg: 20, msrp: 31650 }
];


//return ALL cars
exports.getAll = () => {
    return cars;
};


//return just ONE car
exports.getCar = (make) => {
    //car is the value changes every time when the function is finding
    //it will find the car make to match with the requested make on index.js
    //once found, it will return as an object
    return cars.find((car) => {
        return car.make === make;
    })
};



//querying based on car MODEL
exports.getItem = (model) => {
    //getting full details of the one car
    return cars.find((car) => {
        return car.model === model;
    })
};


exports.addItem = (newcar) => { //expect to pass the parameter as an object
    //checking if the parameter is inside the array
    let found = cars.find((item) => {
        return item.model === newcar.model;
    });
    if (found) {
        return { 'success': false }
        //if not inside the array add this item
    } else {
            cars.push(newcar)
        // console.log (cars)
        return { 'success': true }
    }
}


exports.deleteItem = (model) => {
    //checking if the parameter is inside the array
    if (cars.some(item => item.model === model) === false) {
        console.log("Array doesn't contain : " + model)
        return { 'success': false }

    }
    //creating a new array called newCars by excluding the parameter
    else {
        let modelToDelete = model;
        let newCars = cars.filter(car => car.model !== modelToDelete)
        // console.log(newCars)
        return { 'success': true }
    }
}