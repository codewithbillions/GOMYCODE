// alert("Hello World");
// console.log('Hello world')

// Declaring a Variable with (VAR, LET, CONST) a variable stores the data value
// var james = "my guy"

//  var james = "i am james"
//  let age = 900
//  function home() {
//      var james = "hi"
//      console.log(james)
// }

// age = james;

// // let can be reassigned

//  let james2 = "i be sharp guy";
// james = james2;

//Boolean, strings, numbers, null, undefined
// ************ ARRAYS - Store multiple values in a variable
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apples', 'oranges', 'pears', 'grapes'];
// let hobbies = ["sleep", 33, true];

//console.log(numbers);
//console.log(fruits);
// console.log(typeof(hobbies));

// console.log(typeof(1))

// ************ OBJECTS LITERALS
// const person = {
//     name: "Eve",
//     age: 5000,
//     isPerson: true,
//     hobbies: ["eating", "sleeping"],
//     address: "number 10 taiwo street"
//     };

// console.log(person.address)

//6) STRING CONCATENATION
// let name = "James"
// let age = 99

// archaic method.
//console.log('My name is ' + name + ' and i am ' + age)

//Template literals( use this one)
// console.log(`My name  is ${name} \n and i am ${age} years old`)

// 7) STRING METHODS & PROPERTIES

// let j = 'Hello   world';
// j = 0
// // console.log(j[10])
// //james = j.length
// let james = j.length

// j = j.toUpperCase()
// //james = j.toLocaleLowerCase()

// console.log(j)

// 8) ARRAY METHODS & PROPERTIES
// const colors = ['black', 'white', 'red', 'blue'];
// colors.push('yellow')
// colors.unshift('grey')
// colors.pop();
// colors.shift();
// console.log(colors)
// console.log(Array.isArray(colors))
// console.log(colors.indexOf('white'));

// 9) ARITHMETIC OPERATORS
// + , - , * , / , % , ++ , -- , **

// console.log(13-2)
// console.log(3 * 2)
// console.log(3 * 'hi') // NaN
// console.log('10'/'2')
// console.log(10%2)
// console.log(10%3)
// console.log('3'**'3')

// console.log(5+3)

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

//     person.email = 'james@myguy.com'
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

// person.name = 'Kehinde'
// delete(person.age)

// person.email = 'james@myguy.com'
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
// for (let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
//     // }

// let i = 1;
// while (i <= 10) {
// console.log(`While Loop Number: ${i}`);
// i++;
// }

// ********************** Loop Through Arrays
// const numbers = [80, 29, 25]
// // const numbers = [99, 70, 66]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     }

//15) CONDITIONALS
//**** Simple If/Else Statement

// const x = 30;

// if (x === 10) {
// console.log('x is 10');
// } else if (x > 10) {
// console.log('x is greater than 10');
// } else {
// console.log('x is less than 10');
// }

// ***** Switch (/!\break)
// let color = 'red';

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
//  let colorQualified = color === "red" ? "is red" : "isn't red";
//  console.log(`Color ${colorQualified}!`);


 //condition ? true : false

//  //16) FUNCTIONS
//  function greet(x) { 
//      return `Hello my name is ${x}`; 
//  }

 //console.log(greet('James'))

 
// ARROW FUNCTIONS
// const greet = x => { console.log(`Hello my name is ${x}`); };

// console.log(greet('james'));