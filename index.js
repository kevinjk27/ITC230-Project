const http = require("http");
const cars = require('./data');
let getAllCars = cars.getAll();

http.createServer((req, res) => {
    const path = req.url.toLowerCase();
    switch (path) {
        case '/':
            const fs = require("fs");
            fs.readFile("data.js", (err, data) => {
                if (err) return console.error(err);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Welcome to Kevin\'s ITC230 \n' + 
                'Total number of items in array : ' + getAllCars.length)
            });
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('My name is Kevin. I am from Indonesia. This is my 5th quarter in Seattle Central to pursue AAS degree in Website Development. I\'m taking this course because in WEB150 I was only being taught about plain vanilla JS. As this language is really popular among the developers and the application is so extensive, I\'d like to learn more about Node, Vue, React Native and Express.');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('ERROR: 404 Not found');
            break;
    }
}).listen(process.env.PORT || 3000);