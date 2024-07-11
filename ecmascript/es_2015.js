// # object properties:

// const name="nikhil"
// const age=30;

// // const person={name:name ,age:age}

// const person={name,age}
// console.log(person)

// # Destructuring-Modern js:

// destructuring in js is a way to extract values from arrays or objects and assign them to variables in concise and readable manner.


// * Destructuring arrays:-

// Destructuring in a js expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.That is , we can extract data from arrays and objects and assign them to variables.

// i.) Extracting specific elements:
//  const numbers=[10,20,30]
//  const first=numbers[0]
//  console.log(first) // traditional way

//  const [first, second,third]=numbers
// console.log(second)

// ii.) Ignoring Elements:-

// const numbers=[10,20,30]
// const [ , , third]=numbers
// console.log(third)


// Q. Write a program to swap two variables without using 3rd variable?

// let a=10;
// let b=30;

// with using third variable

// let c=a;
// a=b;
// b=c;
// console.log(a,b) //old traditonal way

// without using third variable

//  [a, b] = [b, a];
// console.log(a, b)


// * Destructuring objects:-

const user={name:"nikhil", age:10}

// i.) Extracting properties:

//   const myName=user.name
//   console.log(myName)   //traditional way

//   const {name, age}=user
//   console.log(name, age)

// ii.) Renaming properties:

//  const {name: fullName, age}=user
//  console.log(fullName)





// #  Spread Operator -Modern Js:-

// javascript ES6 introduced the spread operator.
// The syntax is three dots(...) followed by the arrays.

// i.)copying an array:

// let fruits=["apple","orange","banana"]
// let newFruits=[...fruits]
// console.log(newFruits)


// ii.) concatenating arrays/combining arrays:

// const numbers1=[1,2,3,4]
// const numbers2=[4,5,6]
// const newNumbers=[...numbers1, ...numbers2]
// console.log(newNumbers)

// iii.) adding elements to existing arrays:

// let fruits=["Apple", "Orange", "Mango", "Banana"]
// fruits.push("kela","guava")
// console.log(fruits) //traditional way

// fruits.push(...["kela","guava"])
// console.log(fruits)

// * one more use cases:-

// in js , when you spread a string using spread syntax(...), it converts the string into an arrays of  individual characters.

// const country="INDIA"
// console.log(country.split("")) // traditional way
 

// const country="INDIA"
// console.log([...country])



// # Rest operator: 
// The rest parameters syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept numbers of arguments.

//  traditional way
//  const sum=(a,b,c,d)=>{
//     return a+b+c+d;

//  }
// console.log(sum(1,2,3,4))



//With Rest operator 

// const sum=(a,b, ...numbers)=>{
//     // console.log(typeof numbers)
//   return  numbers.reduce((accum,curVal)=>  (accum=accum+curVal),0)
// }
// console.log(sum(1,2,3,4,5,2418,1325,14,1241))



// Note:- A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.

//function wrong1(...one,...wrong){}
//function wrong2(...wrong, arg1, arg2){}





