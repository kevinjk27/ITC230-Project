const expect = require("chai").expect;
//var assert = require('assert');

let result = { "title": "Dune", author: "frank herbert", pubdate: 1969 }
describe('test indexOf deep equality', function () {
    it('JSON object should be equal', function () {
        expect(result).to.deep.equal({ title: "Dune", author: "frank herbert", pubdate: 1969 });
    });
});




