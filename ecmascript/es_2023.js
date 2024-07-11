// # Array.findLast() & Array.findLastIndex():

const array=[1,2,3,4,5,6,4];
console.log(array.findLast((elem)=>elem))
console.log(array.findLast((elem)=>elem>4))
console.log(array.findLastIndex((Elem)=>Elem))


// # New Array.prototype.function:

const myNames=["vinod", "bahadur","thapa"]

  //  Array.prototype.toReversed():

  const reversedNum=myNames.toReversed()
  console.log(reversedNum)
  console.log("original", myNames)
  console.log("Reversed", reversedNum)

  // If not works here , run it in console



  // Array.prototype.toSorted()

  const sortedArr=myNames.toSorted()
  console.log(sortedArr)
  console.log("original", myNames)
  console.log("reversed", sortedArr)

  
  // Array.prototype.toSpliced(start, deleteCount, ...items)

  const splicedArr=myNames.toSpliced(1,1,"Nikhil")
  console.log("original", myNames)
  console.log("spliced", splicedArr)


  // Array.prototype.with(index,value)


  //* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.


  const replacedWith=myNames.with(2, "NIkhil")
  console.log("original", myNames)
  console.log("replaced", replacedWith)