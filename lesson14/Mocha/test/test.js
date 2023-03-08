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
         let multiplyResult = calculator.multiply (1,10);
         expect (multiplyResult).to.equal(10)
     } )
     it ('Multiply of array (10) integers', async () => {
        let addResult = calculator.multiply (1,2,3,4,5,6,7,8,9,10);
        expect (addResult).to.equal(3628800)
    })
    it ('Multiply of 2 decimal number', async () => {
        let multiplyResult = calculator.multiply (55.5,40.7);
        expect (multiplyResult).to.equal(2258.85)
})
    it ('Multiply of negative integers', async () => {
     let multiplyResult = calculator.multiply (-45,15);
        expect (multiplyResult).to.equal(-675)
} )
    it ('Multiply of number and string', async () => {
        let multiplyResult = calculator.multiply (5,'10');
        expect (multiplyResult).to.equal(50)                   // узнать как прописать ошибку
} )
    it ('Multiply 17-digit number', async () => {
        let multiplyResult = calculator.multiply (1245874258742369,1536974568725468);
        expect (multiplyResult).to.equal(1914877051516714723812900953692)                   
} )
})

describe ('Subtraction function test', function () {
    const calculator = new Calculator();
     it ('Subtraction of 2 integers', async () => {
         let subtractionResult = calculator.subtraction (1,10);
         expect (subtractionResult).to.equal(-9)
     })
     it ('Subtraction of array (10) integers', async () => {
        let subtractionResult = calculator.subtraction (10,20,30,40,50,60,70,80,90,100);
        expect (subtractionResult).to.equal(-530)
    })
    it ('Subtraction of 2 decimal number', async () => {
        let subtractionResult = calculator.subtraction (55.5,40.7);
        expect (subtractionResult).to.equal(14.8)
    })
    it ('Subtraction of negative integers', async () => {
        let subtractionResult = calculator.subtraction (-45,15);
        expect (subtractionResult).to.equal(-60)
    })
    it ('Subtraction of number and string', async () => {
        let subtractionResult = calculator.subtraction (5,'10');
        expect (subtractionResult).to.equal(-5)                   // узнать как прописать ошибку
    })
    it ('Subtraction 17-digit number', async () => {
        let subtractionResult = calculator.subtraction (1245874258742369,1536974568725468);
        expect (subtractionResult).to.equal(-291100309983099)                   
    })
})

describe ('Divide function test', function () {
    const calculator = new Calculator();
     it ('Divide of 2 integers', async () => {
         let divideResult = calculator.divide (1,10);
         expect (divideResult).to.equal(0.1)
     })
     it ('Divide of array (10) integers', async () => {
        let divideResult = calculator.divide (10,20,30,40,50,60,70,80,90,100);
        expect (divideResult).to.equal(0.0000000000000028)
    })
    it ('Divide of 2 decimal number', async () => {
        let divideResult = calculator.divide (55.5,40.7);
        expect (divideResult).to.equal(1.363636363636364)
    })
    it ('Divide of negative integers', async () => {
        let divideResult = calculator.divide (-45,15);
        expect (divideResult).to.equal(-3)
    })
    it ('Divide of number and string', async () => {
        let divideResult = calculator.divide (5,'10');
        expect (divideResult).to.equal(0.5)                   // узнать как прописать ошибку
    })
    it ('Divide 17-digit number', async () => {
        let divideResult = calculator.divide (1245874258742369,1536974568725468);
        expect (divideResult).to.equal(0.8106017393479105)                   
    })
    it ('Divide by 0', async () => {
        let divideResult = calculator.divide (10,0);
        expect (divideResult).to.equal('cant divide by zero')
    })
})

describe ('Exponentiation function test', function () {
    const calculator = new Calculator();
     it ('Exponentiation of integer', async () => {
         let exponentiationResult = calculator.exponentiation (15);
         expect (exponentiationResult).to.equal(225)
     })
     it ('Exponentiation of decimal number', async () => {
        let exponentiationResult = calculator.exponentiation (5.5);
        expect (exponentiationResult).to.equal(30.25)
    })
    it ('Exponentiation of negative integers', async () => {
        let exponentiationResult = calculator.exponentiation (-10);
        expect (exponentiationResult).to.equal(100)
    })
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