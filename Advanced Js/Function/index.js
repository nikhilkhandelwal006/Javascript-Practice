//* ---------------------------------------------------
//*  First-Class Function - it's just a concept
//* ---------------------------------------------------
// A language feature where functions are treated as first-class citizens.
// Functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.
//?   A "first-class function" means that functions can be treated as values, assigned to variables, and passed around as arguments.

// function sayHello(name){
//  return 'Hello, '+ name + "!";
// }

// //assigning the function to a variable
// var greetName=sayHello;


// //using the variable as a function

// console.log(greetName("NK"))




//* -------------------------------
//*  Higher-Order Functions:
//* -------------------------------
//? Definition: A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.

//* -------------------------------
//*  Callback Functions:
//* -------------------------------
//? Definition: A callback function is a function passed as an argument to another function and is executed after the completion of a task.


// function userInput(name, myInput){
//     console.log("Hello "+ name)
//     myInput(name)
// }

// function myInput(name){
//     console.log("Khandelwal")
// }


// userInput("Nikhil", myInput)



//userInput is a higher-order function because it takes another function(callback) as an argument.

//myInput is a callback function because it passed as an argument to userInput and gets executed after the completion of the main task.



// function greet(name, callback){
//     console.log("Hello"+name)
//     callback()
// }
// function myClass(){
//     console.log("GoodBye")
// }
// greet("NK",myClass)




const mathOperation=(a,b,operation)=>{
    return operation(a,b);
};

const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return b-a;
}

console.log(mathOperation(5,15,add))
console.log(mathOperation(10,5,sub))