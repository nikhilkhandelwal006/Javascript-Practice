// #  .at():-
// Before ES2022, square bracket notation was used to fetch a particular element in an array. This method is straightforward unless you need to perform a backward iteration, i.e., negative indexing. In the case of negative indexing, the common practice was to use arr[arr.length — N], where array length is referred to and indexed from the end.

//? The .at() method introduced in ES2022 has simplified this process. In a case of positive indexing, .at() will work the same as the square brackets. But for negative indexing, the .at() method allows starting the iteration from the end.


// const array=[1,2,4,5,6,7]
// // console.log(array[array.length-1]);
// console.log(array.at(-2))
// console.log(array)

// Note:- DataTypes supporting this function
    //   a. string
    //   b. array
    //   c. All typed Array classes:Uint8Array etc.



// # Object.hasOwn(obj,propKey):

//? Object.hasOwn() is a static method that you can use to check if a property exists in an object or not. It returns true if the specified object contains the indicated property as its own, and if the property is inherited or doesn’t exist, it returns false. This method takes the object as the first argument and the property you want to check as the second.

//? Object.hasOwn is the intended alternative for the Object.prototype.hasOwnProperty method. Although Object.prototype.hasOwnProperty has been in JavaScript specification for quite a time, it has some drawbacks.


const book={
    name:"world best Js Course",
    author:"thapa technical",
    place:0
};

// using hasown property
console.log(book.hasOwnProperty("city"))
console.log(book.hasOwnProperty("author"))


//using Object.hasOwn Method

console.log(Object.hasOwnProperty(book, "author"))
console.log(Object.hasOwnProperty(book, "place"))



// Note: There is one issue with hasOwnProperty.

// Issue-01: Doesn't work for objects concated using Object.create(null).

// const student=Object.create(null)
// console.log(typeof student)
// student.name="nikhil"
// console.log(student.name)
// // console.log(student.hasOwnProperty("name"))  // this will not work because we create object through .create
// console.log(Object.hasOwn(student, "name"))