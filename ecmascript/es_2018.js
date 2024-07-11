// # Rest/Spread Properties:-

// Es6 introduced the concept of a rest element when working with array destructuring:-

// const number=[1,2,3,4,5];
// [First, second, ...others] = number
// console.log(number)


  //* Spread elements:

// const Numbers=[1,2,3,4,5];
// const sum=(a,b,c,d,e)=> a+b+c+d+e
// const newNumbers=sum(...Numbers)
// console.log(newNumbers)  


  // * Objects and rest operator:

//   const students={
//     age:10,
//     name:"nikhil",
//     isStudent:true

//   }

//  const {age, ...others}=students
//  console.log(others)


//  * Object and spread operator:-

const obj1={a:10, b:20, c:50};
const obj2={c:30, d:100};

const newObj={...obj1, ...obj2}
console.log(newObj)


// # promise.finally()

// we weill cover this in our promise section




