const {expect} = require('chai');
const Calculator = require ('../../calculator')

describe ('Addition function test', function () {
   const calculator = new Calculator();
    it ('Addition of 2 integers', async () => {
        let addResult = calculator.add (1,10);
        expect (addResult).to.equal(11)
    } )
    it ('Addition of array (10) integers', async () => {
        let addResult = calculator.add (10,20,30,40,50,60,70,80,90,100);
        expect (addResult).to.equal(550)
    } )
    it ('Addition of 2 decimal number', async () => {
        let addResult = calculator.add (55.5,40.7);
        expect (addResult).to.equal(96.2)
    } )
    it ('Addition of negative integers', async () => {
        let addResult = calculator.add (-45,15);
        expect (addResult).to.equal(-30)
    } )
    it ('Addition of number and string', async () => {
        let addResult = calculator.add (1,'1');
        expect (addResult).to.equal(2)                   // узнать как прописать ошибку
    } )
    it ('Addition 17-digit number', async () => {
        let addResult = calculator.add (1245874258742369,1536974568725468);
        expect (addResult).to.equal(2782848827467837)                   
    } )
})

describe ('Multiply function test', function () {
    const calculator = new Calculator();
     it ('Multiply of 2 integers', async () => {
         let addResult = calculator.multiply (1,10);
         expect (addResult).to.equal(10)
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