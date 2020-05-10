const mongoose = require('mongoose');
const credential = require('./credential');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://" + credential.dbuser + ":" + credential.dbpassword + "@cluster0-lpvpm.mongodb.net/test?retryWrites=true&w=majority";
console.log(connectionString)

// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(connectionString, { dbName: "scc-db", useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
    make: { type: String, required: true },
    model: String,
    engine: String,
    mpg: Number,
    msrp: Number
});

module.exports = mongoose.model('Car', mySchema);