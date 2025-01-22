// Recptulando como declarar uma variável

//let js = 'amazing'
//if (js === 'amazing') alert('JavaScript is Fun!!');

//-----------------------------------------------------------------------

//Values and Variables 

// let country = 'Brazil';
// let continent = 'South America';
// let population = '200 million';

// console.log(`Hello! I live in ${country}. ${country} is located in ${continent} and the population of ${country} is ${population} of people`);

//------------------------------------------------------------------------

// Data Types

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun)

// console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
// console.log(typeof 30);
// console.log(typeof 'Felipe');

//------------------------------------------------------------------------

//LET, VAR E CONST

// let age = 30;
// age = 31;

// const birthYear = 1994;

// birthYear = 1995


// const ageFelipe = 2040 - 1994;
// console.log(ageFelipe);

// Comparison Operators

// const now = 2037;
// const felipeAge = now - 1994;
// const daniAge = now - 1995;

// console.log(felipeAge, daniAge);

// console.log(felipeAge < daniAge);
// console.log(felipeAge >= 18);

// const fullAge = daniAge;

// console.log(now - 1994 > now - 1994);


//------------------------------------------------------------------------


//Desafio 1

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark **2;
// const johnBMI = massJohn / (heightJohn * heightJohn);

// console.log(markBMI, johnBMI);

// console.log(markBMI >= johnBMI);

//------------------------------------------------------------------------

// const firstName = 'Felipe';
// const job = 'programmer';
// const birthYear = 1994;
// const year = 2037;

// const felipe = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(felipe);

// const felipeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(felipeNew)


//------------------------------------------------------------------------

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving license? 🚗')
// } else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// } 



// const birthYear = 2012;

// let century; //variável vazia
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's`);
} else{
    console.log(`John's BMI (${BMIJohn}) is heigher than Mark's`);
}