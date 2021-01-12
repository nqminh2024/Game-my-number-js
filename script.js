
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + ' !';
console.log(Jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)*/



/*const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('sarah can start driving license ...');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young . Wait another ${yearsLeft} years :)`);
} */


// coding challenge 

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMi (${BMIMark}) is higher than john's!`);
}else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`);
}*/



// const inputYear = '1991';
// console.log(Number(inputYear ), inputYear);
// console.log(Number(inputYear ) + 18);

// let n = '1' + 1;
// // n = n - 1;
// console.log(n);

// === vs ==

/*const favourite = prompt("What's your favourite number ?");
console.log(favourite);
console.log(typeof favourite);

if (favourite ==23) {
    console.log('coll ! 23 is an amzaing number!');
}
*/


// logical operators

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasGoodVision || hasDriverLicense);

// p2 


/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); */


//function declaration
/* function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression

const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2); */


// function calling other

/*function cutFruitPieces (fruit) {
    return fruit * 4;

}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange .`;
    return juice;
}
console.log(fruitProcessor(2, 3)); */

// reviewing function

/*function calcAge (birthYear) {
    return 2037 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const Retirement = 65 - age;

    if (Retirement > 0) {
        console.log(`${firstName} retirens in ${Retirement} years`);
        return Retirement;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
 console.log(yearUntilRetirement(1991, 'jonas'));
 console.log(yearUntilRetirement(1950, 'mike'));*/

 //coding challenge

/*const calcAverage = (a, b, c) => (a + b +c) / 3;
console.log(calcAverage(3, 4, 5));

//test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    }else{
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111); */


// introduction to Arrays
/*const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[friends.length - 1]); */

//Basic array operations

/*const friends = ['micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //them 1 phan tu moi
console.log(friends);

friends.unshift('John');// them phan tu vao dau mang
console.log(friends);


//remove element
friends.pop();// xoa bo phan tu cuoi mang
const popped =  friends.pop();
console.log(popped);
console.log(friends);

friends.unshift(); //xoa bo phan tu cuoi cua mang
console.log(friends);
*/

//Introduction to object
/* const jonas = {
    firstName:'Jonas',
    lastName:'Schmedtmann',
    age: 2037 - 1991,
    job:'teacher',
    friends:['Michael', 'Perter', 'Steven']
};
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIN = prompt('what do you want to know about Jonas ? choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIN]) {
    console.log(jonas[interestedIN]);
    
} else {
    console.log('wrong request !');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas); */