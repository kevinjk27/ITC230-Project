const expect = require("chai").expect;
const cars = require("../data");



//getItem function
describe('getItem function testing', function () {
    //success condition
    it('Returns full data about the requested item', function () {
        let outcome = { make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990 }
        expect(outcome).to.deep.equal(cars.getItem("Supra"));
    });
    //failure condition
    it('Fails with invalid car model', () => {
        let outcome = cars.getItem("Tesla");
        expect(outcome).to.be.undefined;
    })
});



//addItem function
describe('addItem test', function () {
    //success condition
    it('Adds a new item to the data array, if it doesn\'t exist', function () {
        let outcome = cars.addItem({ make: 'Chevrolet', model: 'Camaro', engine: '2.0 L 4-cylinder', mpg: 22, msrp: 25990 })
        expect(outcome.success).to.be.true;
    });
    //failure condition
    it('Returns false when the parameter has already existed in array', () => {
        let outcome = cars.addItem({ make: 'Volkswagen', model: 'Atlas', engine: '3.6 L V6', mpg: 20, msrp: 31545 })
        expect(outcome.success).to.be.false;
    })
});


//deleteItem function
describe('deleteItem test', function () {
    //success condition
    it('Deletes the item and return true', function () {
        let outcome = cars.deleteItem("M3")
        expect(outcome.success).to.be.true;
    });


    //failure condition
    it('Returns false because parameter isn\'t inside the array', function () {
        let outcome = cars.deleteItem("Tesla")
        expect(outcome.success).to.be.false;


        // let lengthBefore = cars.length()
        // let lengthAfter = outcome.length()
    });
});