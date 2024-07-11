// # Array.flat & Array.flatMap

// i.) flat(): is a new array instance method that can create a one dimensional array from multidimensional array.(nested array to single flat array.)

// const nestedArray=[1,2,[3,4],5];
// const nestedArray1=[1,[2,[3,[4]]],5];

// console.log(nestedArray.flat())
// const newNested=nestedArray.flat(3);
// console.log(newNested);


// ii.) flatMap(): is a new Array instance method that combines flat() with map(). It's useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat.

// const arr=["my name", "is vinod", "thapa"]
// const newArr= arr.flatMap((curVal)=> curVal.split(" "))
// console.log(newArr)


// # Object.fromEntries():

// => objects have entries() method, since Es-2017
// =>it returns an array containing all the object own properties, as an array of [key,value] pairs.

// const person={name:"nikhil", age:24};
// const entries=Object.entries(person)
// console.log(entries)

// const NewPerson=Object.fromEntries(entries)
// console.log(NewPerson)


// console.log(person==NewPerson)




// # strings.prototype.{trimStart, trimEnd}:

// i.) trimStart(): returns a new string with removed white spaces from the start of the original string.

// console.log("Testing".trimStart())
// console.log("      Testing".trimStart())
// console.log("   Testing     ".trimStart())
// console.log("Testing   ".trimStart())


// ii.) trimEnd(): returns a new string with removed white spaces from the end of the original string.

// console.log("Testing".trimEnd())
// console.log("      Testing  ".trimEnd())
// console.log("   Testing     ".trimEnd())
// console.log("Testing   ".trimEnd())




// # Symbol.prototype.description:-

// const mySymbol=Symbol("This is my symbol")
// console.log(mySymbol.description);
// console.log(typeof mySymbol);


// # optional Catch Binding:-

// In ECMAScript 2019 (ES10), a new feature called "optional catch binding" was introduced for the try...catch statement. This feature allows you to omit the parameter in the catch block, making it optional.


// we previously had to do:-

// try{
//     //..
// }catch(e){
//     //handle error
// }


// Now we can omit that optional parameter:-

try {
    10+5;
} catch {
    console.log("there is error");
}


try {
    afa +5;
} catch {
    console.log("there is error");
}
