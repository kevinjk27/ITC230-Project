let cars = [
    { make: 'Toyota', model: 'Supra', engine: '3.0 L 6-cylinder', mpg: 24, msrp: 49990 },
    { make: 'Volkswagen', model: 'Atlas', engine: '3.6 L V6', mpg: 20, msrp: 31545 },
    { make: 'BMW', model: 'M3', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 67495 },
    { make: 'Land Rover', model: 'Range Rover Velar', engine: '3.0 L 6-cylinder', mpg: 17, msrp: 56300 },
    { make: 'Audi', model: 'Q7', engine: '2.0 L 4-inline', mpg: 20, msrp: 54800 },
    { make: 'Honda', model: 'Pilot', engine: '3.5 L V6', mpg: 20, msrp: 31650 }
];


exports.getAll = () => {
    return cars;
};

exports.getMake = () => {
    return cars.make;
}

exports.getDetails = () => {
    /*
    return cars.forEach((item) => {
        "Make :", this.make;
        "Model :", this.model;
        "Engine :", this.engine;
        "Mpg :", this.mpg;
        "MSRP :", this.msrp;
    });
    */
}
