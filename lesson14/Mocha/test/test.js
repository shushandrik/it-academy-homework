const {expect} = require('chai');
const Calculator = require ('../../calculator')

describe ('Addition function test', function () {
    it ('Addition of 2 integers', async () => {
        const functionResult = divide (10,10);
        expect (functionResult).to.equal(20)
    } )
})



/*
const {expect} = require('chai');
const {returnTrue} = require ('../../func')

describe ('First test', function (){
    it ('Title that will be included in the report', async () => {
        const functionResult = returnTrue ();
        expect (functionResult).to.equal(true)
    } )
})
*/