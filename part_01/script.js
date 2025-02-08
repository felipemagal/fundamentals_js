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


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's`);
// } else{
//     console.log(`John's BMI (${BMIJohn}) is heigher than Mark's`);
// }

//Exercício 1 - Verificar a maioridade

// const age = prompt('Digite sua idade');

// if(age >= 18) {
//     console.log(`Felipe are ${age} years old`)
// } else{
//     console.log(`Felipe is underage. He are ${age} years old`)
// };

//Exercício 2 - Checar o maior entre os dois números

// const num1 = prompt('Digite o primeiro número: ')
// const num2 = prompt('Digite o segundo número: ')

// if(num1 > num2) {
//     console.log(`num1 ${num1} é maior que num2 ${num2}`)
// } if (num2 > num1) {
//     console.log(`num2 ${num2} é maior que num1 ${num1}`)
// } else{
//     console.log(`num1 ${num1} é igual num2 ${num2}`)
// }

//Exercício 3 - Validação de Senha

// const senhaCorreta = 12345;
// const senhaDigitada = prompt('Digite a senha para entrar: ');

// if(senhaCorreta == senhaDigitada) {
//     console.log('A senha está correta')
// } else {
//     console.log('Senha incorreta. Tente novamente!')
// };

//Operadores de Condição

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); //precisa que as duas informaçóes sejam verdadeireas para que o resultado seja True
// console.log(hasDriversLicense || hasGoodVision); //presica apenas de uma das informações serem verdadeiras para o resultado seja True
// console.log(!hasDriversLicense); //! siginifica o oposto. Ou seja: não tem licença para dirigir 


// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive')
// } //o resultado é falso porque hasGoodVision é falso *para o exercício seguinte, foi mudado o valor da const para true*

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive')
// }

//CHALLENGE 3 

// const scoreDolphins = 96 + 108 + 89;
// const scoreKoalas = 88 + 91 + 110;

// const avgDolphins = (scoreDolphins) / 3;
// const avgKoalas = (scoreKoalas) / 3;

// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas) {
//     console.log('Dolphins win the trophy')
// } else if (avgKoalas > avgDolphins)
//     console.log('Koalas win the trophy')
// else if (avgDolphins === avgKoalas)
//     console.log('Both win the trophy');


// SWITCH

// const day = 'monday';

// switch(day) {
//     case 'monday': //day === monday
//         console.log('Plan  course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples')
//         break
//     case 'friday':
//         console.log('Record videos')
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend :D')
//         break;
//     default:
//         console.log('not a valid day')
// }



// exemplo de como seria escrito o mesmo exemplo, mas com if else
// const day = 'wednesday';

// if(day === 'monday') {
//     console.log('Plan  course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday')
//     console.log('Prepare theory videos');
// else if (day === 'wednesday' || day === 'thursday')
//     console.log('day off')
// else {
//     console.log('study')
// };


/////////////////////////////////////////////////////

//OPERADOR CONDICIONAL - ternary operator

// const age = 23; // um operador sempre produz valor
// age >= 18 ? console.log('i like to drink wine 🍷') :
// console.log('i like to drink water 💧');

// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`) //o conceito de Operador e de expressão é algo que produz um valor. Por isso podemos colocar o valor dentro de ${}


//CHALLENGE 4 - calculadora de gorjeta
const bill = 275;
const tip = bill >= 50 && bill <=300 ? (15/100)*bill : (20/100)*bill;
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${bill+tip}`);
