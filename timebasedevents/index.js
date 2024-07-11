// 1. setTimeOut:-
//    The setTimeOut function is used to execute a function or code block after a specified delay in milliseconds.

// function delayedFunction(x){
//     console.log("this function was delayed by 2000 milliseconds(2seconds)")
// console.log("this function was delayed by 2000 milliseconds(2seconds).", x)
// }
// // setTimeout(delayedFunction,2000)
// setTimeout(()=> delayedFunction(5),2000)



// 2.setInterval:-
//     The setInterval function is used to repeatedly execute a function or codeblock at a specified intervals in milliseconds.

//  function repeatedFunction(){
//     console.log("this function will be repeated every 2000 milliseconds")
//  }
//  setInterval(repeatedFunction,2000)



// 3. clearing Timeout with clearTimeout:

// function delayedFunction(){
//     console.log("this function was delayed by 2000 milliseconds(2 seconds)")
// }

// const myWork=setTimeout(delayedFunction,2000)
// clearTimeout(myWork)


// 4. clearing interval with clearInterval:

// function repeatedFunction(){
//     console.log("this function repeats every 1000 milliseconds")
// }
// const intervalId=setInterval(repeatedFunction,1000)
// setTimeout(()=>{
//     clearInterval(intervalId)
// },5000)




// #interview question :-

// const repeatedFunction=()=>{
//     console.log("this function repeats every 1000 milliseconds")
// }
// repeatedFunction()
// const intervalId=setInterval(repeatedFunction,1000)
// setTimeout(()=>{
//     clearInterval(intervalId)
//     console.log('this will stop after 5 seconds')
// },5000)