

// console.log("tamilore, Gift, lateef");
// declaring a variable in javascript!
// var was before ES6.

//now we use let and const

// var let and const

// var name = "Gift";
// let school = "Gomycode";
// const address = "yaba, Lagos"
// name = "tamilore"
// school = 'hackathon'

// console.log(name, school, address)
//Data types 
// number boolean strings undefined null symbol arrays objects function

// const age = 100; // number
// const isMale = true; //boolean
// const name = "lateef" //string
// let z                 //undefined
// const x = null;         //null

// console.log(name, age, isMale, z, x)


//what is an arrays - to store multiple values in a variable
// let numbers = [1, 2, 3, 4, 5, ];
// let fruits = ["apple", "orange", "banana", "tomato", "mango"]

// console.log(numbers)
// console.log(fruits)

//OBJECTS LITERALS
// const person = {
//     name : "Joe Igbokwe",
//     age : 22,
//     isPerson : true,
//     hobbies: ["eating", "sleeping", "partying", " reading"]
// }

// console.log(person)
// console.log(typeof name) to check the type of datatype

//FUNCTION 
// function dummyfunc() {}

// console.log(typeof dummyfunc)
// STRING CONCATENATION

// let name = "gift"
// let age = 32
// // ARCHAIC METHOD
// console.log("My name is " + name + " i am " + age + " years old");

// //TEMPLATE LITERALS METHOD
// console.log(`My name is ${name} and i am ${age} years old`)


//STRING AND PROPERTY METHOD

// let s = "HELLO WORLD";
// let val
// val = s.length

// val = s.toLowerCase()
// console.log(val)

// val = s.split('');
// //val = val.join('+');

// console.log(val)

// ARRAYS AND PROPERTIES
const colors = ['black','white', 'red', 'blue']

console.log(colors.splice(1, 0, "pink", "purple"))
// // console.log(colors[3])
// colors.push('yellow')
// colors.unshift('grey')
// colors.pop()
// colors.shift()
// console.log(colors)


// const colors = ['black', 'white', 'red', 'blue']
// colors.push('yellow')
// colors.unshift('grey')
// colors.pop()
// colors.shift()

// var takeWhite = colors.indexOf("white")
// colors.splice(takeWhite, 1)

// console.log(colors)

// ARITHEMETIC OPERATORS
//+, -,/,*,%,**

// console.log(5+5)
// console.log(5-5)
// console.log(5*5)
// console.log(10/5)
// console.log(25%3)
// console.log('5' + 5)
// console.log(5**5)

// let y = 5
// console.log(y)

// let j = 5
// console.log(++j)
// console.log(--j)


// 10) OBJECT LITERIALS
// const person = { // an object is a collection of key-value paires
//     firstName: 'Adam',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//     street: '66 Main st',
//     city: 'wtvr',
//     state: 'over there'
//     }
//     };

    
//     // synchronous call vs asynchronous
//     person.email = 'gift@yahoo.com'
//     person.hobbies.push('singing')
//     console.log(person)

// ************ /!\ Array of objects
// const users = [
// {
// name: 'person',
// age: 23,
// email: "p1@gmail.com",
// },
// {
// name: 'person 2',
// age: 31,
// email: "p2@gmail.com",
// },
// {
// name: 'person 3',
// age: 155,
// email: "p3@gmail.com",
// }
// ];

// console.table(users)

//11) Const mutability
// *** Objects
// const person = {
// name: 'James',
// age:27,
// address:'Nigeria'}

// person.name = 'kehinde'


// delete(person.age)
// console.log(person)

//12) COMPARISON OPERATORS
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean

// != compares the inequality based on value

// !== compares the inequality based on value and type
// let number = 3 !='3'
//Thats the AND(&&), OR(||) and the NOT(!) operators
//console.log(number)

// For loop
// for (let i = 0; i <= 20; i++) {
//     console.log(`For Loop Number: ${i}`);
//      }

// let i = 0;
// while (i <= 10) {
// console.log(`While Loop Number: ${i}`);
// i++;
// }


// ********************** Loop Through Arrays
  // const numbers = [80, 29, 25, 60, 40]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// for (let x of numbers) {
// console.log(x);
// }

// for (let i in numbers) {
// console.log(numbers[i]);

// }

// console.log('je m\'appelle wtvr')

//15) CONDITIONALS
//**** Simple If/Else Statement

// const x = 2;

// if (x === 10) {
// console.log('x is 10');
// } else if (x > 10) {
// console.log('x is greater than 10');
// } else {
// console.log('x is less than 10');
// }





// const color = "purple";

// if (color === "red") {
//     console.log("color is red")
// } else if (color === "blue") {
//     console.log("color is blue")
// } else {
//     console.log("color is not red or blue")
// }

// ***** Switch (/!\break)
// let color = 'purple';

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

// ***** Ternary operator / Shorthand if
// ***** Ternary operator / Shorthand if
// let color = 'red';
//  let colorQualified = color === "red" ? "is red" : "isn't red";
//  console.log(`Color ${colorQualified}!`);
 //condition ? true : false

  //16) FUNCTIONS
//  function greet(x) { 
//      return `Hello my name is ${x}`; 
//  }

//  console.log(greet('tamilore'))
