// # String.prototype.replaceAll():-
//  replaceall in Js is a function that replaces all occurences of a specified value with another value in a given string.

// // Replacing all occurences of a word:

// const originalString="Hello, World! Hello again"
// const NewString=originalString.replaceAll("Hello", "Hey!")
// console.log(NewString);


// // Replacing multiple spaces with a single space:

// const text="This has   to    Be    Extra       space";
// const newText=text.replaceAll(/\s+/g, " ")
// console.log(newText)



// # Logical Assignment operator (||=, &&=, ??=)


// i.)Logical OR-Assignment(||=):This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.

// let x=false;
// x||=10;  //equivalent to x=x||true;
// console.log(x)


// let x=null;
// x||=20;  //equivalent to x=x||true;
// console.log(x)


// let y=10;
// y||=100;
// console.log(y)   // (unchanged)  //10

// ii.)Logical AND-Assignment(&&=): This operator assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwise, it leaves the left-hand operand unchanged.

// let x=true;
// x&&= false; //equivalent to: x=x&& false;
// console.log(x)  //false

// let y=0;
// y&&= 20; //equivalent to: y=y&& false;
// console.log(y)  //0

// let x=10;
// x&&= 20; //equivalent to: x=x&& false;
// console.log(x)  //20


// # Numeric Seprator:-
// This feature allows underscores (_) to be used as separators within numeric literals to improve readability.

let num=1_000_0000_000;
console.log(num)