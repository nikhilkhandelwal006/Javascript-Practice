// i. lexical scoping:- 

// var a=5
// var b=10

// // what will be the value of a?

// a=5

// ii. scope  chaining:-


// *global scope: 
//  
//    variables:- variable declared outside of any function or block have global scope.

//    access:- global variables are accessible from any part of the code including functions and blocks.

// *function scope:-

// variables: variables declared inside a function have function scope

// access: function-scoped variables are only accessible within the function where they are declared.

// *block scope:-

//  variables: variables declared with let and const inside a block (e.g. an if statement or a for-loop have block scope)

//  access: block shaped variables are only accessible with the block where they are declared.

// const globalVariable="i am a global variable"

// function myFunction(){
//     // function scope
//     const functionVariable="i Am a function variable"


// if(true){
//     const blockVariable="i am a block variable"
//     console.log(blockVariable)
//     console.log(functionVariable)
//     console.log(globalVariable)

// }
// // console.log(blockVariable)

// }
// myFunction()
// // console.log(functionVariable)



