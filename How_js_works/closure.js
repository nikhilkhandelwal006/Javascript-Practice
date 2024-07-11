// closure: a closure is created when an inner function have access to the variables of its outer function , even after the outer function has finish executing.


// function outerFunction(){
//     var outerVariable="i'm from outer"

//     function innerfunction(){
//         console.log(outerVariable)
//     }

//     return innerfunction
// }

// var closureFunction=outerFunction()
// closureFunction();



function multiplier(factor){
   return function(number){
        console.log(number,factor)
        return factor*number
    }

}

const double=multiplier(5)
console.log(double(6))



