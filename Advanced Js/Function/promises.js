//* ==========================================
//*  Promise in JavaScript
//* ==========================================

//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//todo 👉 In simpler terms, a promise is like a placeholder for the result of an asynchronous operation. Or A container for the future result or value.

//* It can be in one of three states:

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.

//? Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.

//* ==========================================
//* Using the Promise Constructor (Class):
//* ==========================================

//? You can create a promise using the Promise constructor. This involves creating a new instance of the Promise class, which takes a function as an argument. This function, often referred to as the "executor function," takes two parameters: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounters an error.


//* real life example

//todo  1:  default state is pending

//todo 2:  Promise Made:  Your friend promises to call you after 2 days at 6 pm. This is similar to creating a promise in JavaScript.

//todo 3:  Pending Stage:  During the 2-day period, you're in a "pending" stage. You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarly, when you create a promise in JavaScript, it starts in a pending state until it either resolves (fulfills) or rejects.

//todo 4: Resolution at a Specific Time:  After 2 days and exactly at 6 pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected) if your friend doesn't call. This aligns with the idea that promises in JavaScript resolve or reject, often triggered by asynchronous operations, at a specific point in time.


//* ==========================================
//* 2: Using a Function (Promise Wrapper):
//* ==========================================

//? You can also create a promise by defining a function that returns a promise. This function usually encapsulates some asynchronous operation.  Inside this function, you manually create a promise and resolve or reject it based on the result of the asynchronous operation.

// syntax
// function myPromiseFunction() {
//   return new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
// }


// const pr=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I miss you")
//     }, 3000);
// }).then((res)=>{
// console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Don't Worry, we all miss you");
// });


// const pr=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("sorry i can't")
//     }, 3000);
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("don't worryy, i miss u any ways!")
// })



// studentName="nikhil"
// const enrollStudent=new Promise((resolve, reject) => {
//     setTimeout(() => {
//        isSuccessful=(Math.random()>0.4);

//        if(isSuccessful){
//         resolve(`Hey!, ${studentName} your admission is successful`)
//        }else{
//         reject(`sorry ${studentName} your admission is cancel`)
//        }
        


//     }, 2000)
// }).then((resolve)=>{
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Enrollment process is complete")
// })



//* ==========================================
//* Promise Methods
//* ==========================================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.


// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First")
//     }, 2000);
// })

// // const promise2=new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("second")
// //     }, 2000);
// // })

// const promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//        reject("Failed")
//     }, 100);
// })
// const promise3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("third")
//     }, 5000);
// })

// Promise.all([promise1,promise2,promise3]).then((resolve)=>{
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error)
// })




// const promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First")
//     }, 2000);
// })
// const promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second")
//     }, 3000);
// })
// const promise3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("third")
//     }, 2000);
// })

// Promise.allSettled([promise1,promise2,promise3]).then((res)=>{
// console.log(res)
// }).catch((Error)=>{
//     console.log(Error)
// })



const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("reject")
    }, 1000);
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("second")
    }, 2000);
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("third")
    }, 4000);
})

Promise.race([promise1,promise3, promise2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Done")
})