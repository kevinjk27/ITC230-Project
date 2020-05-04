const expect = require("chai").expect;
const cars = require("../data");



//Success on getItem
describe('test deep equality', function () {
    it('return full data about the requested item', function () {
        let outcome = {make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990}
        expect(outcome).to.deep.equal(cars.getItem ("Supra"));
    });
});



//Success on addItem
describe('test deep equality', function () {
    it('add a new item to the data array, if it doesn\'t already exist', function () {
        let outcome = [
            { make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990 },
            { make: 'Volkswagen', model: 'Atlas', engine: '3.6 L V6', mpg: 20, msrp: 31545 },
            { make: 'BMW', model: 'M3', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 67495 },
            { make: 'Land Rover', model: 'Range Rover Velar', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 56300 },
            { make: 'Audi', model: 'Q7', engine: '2.0 L 4-inline', mpg: 20, msrp: 54800 },
            { make: 'Honda', model: 'Pilot', engine: '3.5 L V6', mpg: 20, msrp: 31650 },
            { make: 'Chevrolet', model: 'Camaro', engine: '2.0 L 4-cylinder', mpg: 22, msrp: 25990 }
        ]
        expect(outcome).to.deep.equal(cars.addItem ("Camaro"));
    });
});


//Success on deleteItem
describe('test deep equality', function () {
    it('delete the requested item', function () {
        let outcome = [
            { make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990 },
            { make: 'Volkswagen', model: 'Atlas', engine: '3.6 L V6', mpg: 20, msrp: 31545 },
            { make: 'BMW', model: 'M3', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 67495 },
            { make: 'Land Rover', model: 'Range Rover Velar', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 56300 },
            // { make: 'Audi', model: 'Q7', engine: '2.0 L 4-inline', mpg: 20, msrp: 54800 },
            { make: 'Honda', model: 'Pilot', engine: '3.5 L V6', mpg: 20, msrp: 31650 },
            { make: 'Chevrolet', model: 'Camaro', engine: '2.0 L 4-cylinder', mpg: 22, msrp: 25990 }
        ]
        expect(outcome).to.deep.equal(cars.deleteItem ("Q7"));
    });
});