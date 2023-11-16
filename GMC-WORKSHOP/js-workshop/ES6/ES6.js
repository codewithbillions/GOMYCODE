//////VARIABLE//////
//const let scope local 

 // scope of a variable is the range by which a variable can be accessed
  //it can be locally scoped and globally scoped.
  // a locally scoped variable can be accessed within the block of functions
  // while the globally scoped can be accessed anywhere in your code

// const scope = () => {
//     var x='x'
//     {var y='y';
//     let z='z'
//     console.log('x:',x)
//   }
//     // console.log('outside the block',y)
//     // console.log('outside the block',z)
//   }
//   scope()
 
//x:x
//y:y
//error: Uncaught ReferenceError: z is not defined

// const scope = () => {
//     var x='x'
//     {var y='y';
//     let z='z'
//     console.log('x:',x)
//     console.log('inside the block',y)
//     console.log('inside the block',z)
//   }
//   }
//   scope()
// // x:x
// // y:y
// // z:z

// function scope() {
//     {const pi=3.14
//     console.log('inside the block',pi)
//}
//     console.log('outside the block',pi)
// }

// scope()
// //3.14
// //error: Uncaught ReferenceError: pi is not defined

// // FUNCTION /////

//normal function
//  function sayHello(name){
//   return "Hello " + name
//  }

//ES6 function
// const sayHello = (name)=>{
// //Some stuff 
//    return "Hello " + name
//  }
 
//  //const sayHello = name => "Hello " + name
 
//  console.log(sayHello("john"))


// /////TERNARY OPERATOR /////

// let marks=50

// let result = (marks >= 40) ? 'Passed' : 'Failed';

// console.log(`You ${result} the exam.`);

// //////ARRAY////////
//map method execute your statement and returns the result in a new array
// let array = [15, 24, 15, 26, 1, 8, 45];

// let array1 = array.map(el=>el*2)

// console.log(array1)

//you get >>>
// [
//     30, 48, 30, 52,
//      2, 16, 90
//   ]
//>>>>>>>>>>>>>>>>>>>>>>

// for each does not return a new array
//  array = [15, 24, 15, 26, 1, 8, 45]

//    array = array.forEach(el => console.log(el * 2))

//    console.log(array)
   //>>>>>>>>>>>>>

//filter method return the element that passes a condition

//    array = [15, 24, 15, 26, 1, 8, 45]

//     let array2 = array.filter((el)=>el>20)

//     console.log(array2)
    //this return every element greater than 20

//>>>>>>>
//it add the previous element to the current element
//reduces it to a single element
  // array = [15, 24, 15, 26, 1, 8, 45]
  // let array3 = array.reduce((previous, current) => previous + current);
  // console.log(array3)

//>>>>>>>>>>>>>>
// array.find returns the first element the passes the condition
// array = [15, 24, 15, 26, 1, 8, 45]
// let array4 = array.find(el=> el>25)
// console.log(array4);
//>>>>>>>>>

// array.findIndex returns the index of the first element that passes the condition

// array = [15, 24, 15, 26, 1, 8, 45]

//  let array5 = array.findIndex(el=> el>25)
// console.log(array5)
 //returns the first element greater than 25

 //>>>>>>>>>>>>>>

// function map1 (array){

//   for(let i=0; i< array.length; i++){
//     array[i]=array[i]+1
//   }
//   return array
// }
// console.log(map1([15, 24, 15, 26, 1, 8, 45]));

//loop through the array for every array add 1 


function filter (){
  let array=[15, 24, 15, 26, 1, 8, 45]
  let tab = []
  for(let i=0; i< array.length; i++){
    if(array[i]>20){
      tab=tab.concat(array[i])
    }
  }
  return tab
}

console.log(filter())



// ///////DEST + SPREAD.JS/////////
// // Without destruction
let user = {
    name: "dolapo",
    age: 26,
    fullstack: {
      track: "js",
      skill: 'ES6',
    },
  };

let a = (user) => {
    return `my name is ${user.name}, i'm ${user.age} and we are learning ${user.fullstack.track}:${user.fullstack.skill} `;
  };

  console.log(a(user));
//>>>>>>>>>>>>>>>>
// //with desct
// unpacking element in an array and values in an object to a variable
// let user1 = {
//     name: "Ebuka",
//     age: 26,
//     fullstack: {
//       track: "Js",
//       skill: 'ES6',
//     },
//   };
//   let a = ({ name, age, fullstack: { track, skill } }) => {
//     return `my name is ${name}, i'm ${age} and we are learning ${track}:${skill} `;
//   };
//   console.log(a(user1));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>

//SPREAD help you unpack an element from one array to another array
// //spread objects
// let user = {name:'ilen', age:25, adress:'boumhel'}
// let infos={track:'full stack js', framework:'react'}
// let fullinfo= {...user,...infos}
// console.log(fullinfo)

// let info={...user, id:1}
// console.log(info)

// //spread with map 
// const users = [{ name: "mohamed" }, { name: "salah" }];
// const tt = [...users, { name: "hejer" }];
// const u = users.map((el, i) => { return{...el, age: i} });
// console.log(...u);

// //spread tables 
// let arr=['hello', 'world']
// let arr2=['welcome', 'to', 'gomycode']
// let newarr=[...arr]
// console.log(newarr)
// console.log(arr)

// //concat
// let newar=[...arr,...arr2]
// let x=[...arr, 'x']
// console.log(x)
// console.log(newar)
