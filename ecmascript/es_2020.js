//# BigInt:- BigInt is a data-type used to represent and perform operations on large integers that exceed the limits of regular numbers.

// * Creating BigInts:-
//     Using the `n` suffix

//  Using the BigInt() constructor:
//    
        // const anotherLargeNumber= BigInt("1234654532145645342123436")
        // console.log(anotherLargeNumber)
        // console.log(typeof anotherLargeNumber)


         let maxNumber= Number.MAX_SAFE_INTEGER
        //  console.log(maxNumber)
        //  let num=  maxNumber+10;
        //  console.log(num)
        //  console.log(num-1)
        maxNumber= BigInt(maxNumber)
        let num= maxNumber+10n
        console.log(maxNumber)
        console.log(num)


        
// # Nullish coalescing operator(??):-

//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum =0; //falsy value
// userFavNum=favNum||10;
// console.log(userFavNum)
    
// let favNum =0; //falsy value
// userFavNum=favNum??10;
// console.log(userFavNum)

// let favNum =null; //falsy value
// userFavNum=favNum??10;
// console.log(userFavNum)


// # Optional chaining Operator(?.)

// const person={
//     name: "nikhil",
//     address:{
//         city:"newyork",
//         zipcode:12345,
//     },
// };

// => Accessing nested properties without optional chaining:-

// const city=person.address?person.address.city:"city is not present";
// console.log(city);




// const person={
//     name: "nikhil",
//     address:{
//         city:0,
//         zipcode:12345,
//     },
// };

// => with optional accessing:

// const city=person.address?.city??"city is not present";
// console.log(city)


// we used nullish coalescing operator(??)  because if city value is 0 then still it can show.


// ** One more Example:

// The optional chainning operator can be chained multiple times to access deeply nested properties:-

// const person={
// name:"john",
// address:{
//     city:"New-york",
//     zipcode:12345,
//     cordinates:{
//         latitude:40.1782,
//         longitude:-74.213465,
//     },
// },
// };


//=> Accessing deeply nested properties with optional chaining.

// const latitude= person.address?.cordinates?.latitude??"not present";
// console.log(latitude)



// # Promise.allSettled():

// We'll cover this later in promise section.

