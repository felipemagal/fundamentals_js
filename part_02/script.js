'use strict'; //modo estrito nos proíbe de fazer certas coisas criando erros visíveis

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can drive')


// function logger() {
//     console.log('My name is Felipe');
// };

// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} 

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)