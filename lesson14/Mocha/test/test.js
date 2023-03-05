const {expect} = require('chai');
const Calculator = require ('../../calculator')

describe ('Addition function test', function () {
   const calculator = new Calculator();
    it ('Addition of 2 integers', async () => {
        let addResult = calculator.add (10,10);
        expect (addResult).to.equal(20)
    } )
    it ('Addition of 4 integers', async () => {
        let addResult = calculator.add (10,10,10,20);
        expect (addResult).to.equal(50)
    } )
})



/*
const {expect} = require('chai');
const {returnTrue} = require ('../../func')

describe ('First test', function (){
    it ('Title that will be included in the report', async () => {
        const functionResult = returnTrue ();
        expect (functionResult).to.equal(false)
    } )
})
*/