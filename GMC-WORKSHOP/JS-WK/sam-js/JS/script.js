// var name = "sam"
// const age = 9
// name = "kenny"

// console.log(name)

// ************ PRIMITIVE TYPES
// const name = 'Adam';
// const age = 37;
// const rating = 3.5;
// const isPerson = true;
// const x = null;
// let z; // undefined;
// console.log(
// `the variable "numbers" has the value "${age}" & the type of "${typeof age}"`
// );

// ************ ARRAYS - Store multiple values in a variable
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apples', 'oranges', 'pears', 'grapes'];
// let hobbies = ["sleep", 33, true];

// console.log(numbers)
// console.log(fruits)
// console.log(hobbies)

// console.log(typeof(true))

//******** Object literals */
const sam = {
  age: 900,
  isMale: true,
  hobbies: ["eating", "sleeping"],
};

sam.age = 400;
sam.email = "sam@babangida.com";
console.log(sam);

//function as a type
// function sam() {};

// console.log(typeof sam)

// string concatination
// let name = "sam";
// let age = 10;

// //Archaic method
// console.log("my name is " + name + " i am " + age);
// // Template literals
// console.log(`My name is ${name} i am ${age}`)

// strings and properties

// let s = "HELLO World";
// let sam
// sam = s.length

// sam = s.toLowerCase()

// console.log(sam)

const numbers = [80, 29, 25];
//  for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//  }

// let i = 1;
// while (i <= 20) {
// console.log(`While Loop Number: ${i}`);
// i++;
// }

// ***** Switch (/!\break)
//let color = 'black';

// switch (color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;
// default:
// console.log('color is neither red nor blue');
// }

let color = "red";
//***** Ternary operator / Shorthand if
let colorQualified = color === "red" ? "is red" : "isn't red";
console.log(`color ${colorQualified}`)

let colore = "black"
let myColour= colore === "black" ? "is black" : "isnt black";
console.log(`Colore ${myColour}!`);
