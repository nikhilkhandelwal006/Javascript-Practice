// const persons=["ram","hari","sita","vishal","gita"]
// console.log(persons[0])
// console.log(persons[2])
// console.log(persons.length-1)
// console.log(persons[-1])  //undefined
// console.log(persons.at(-1))
// console.log(persons.at(-5))

// let fruits=new Array('apple','orange',"banana")
// console.log(fruits)

// let fruits=["apple","orange","banana"]
// console.log(fruits)

// let arr=[]
// console.log(arr)
// console.log(typeof arr) //object


// let fruits=["apple","orange","banana"]
// console.log(fruits[3])
// console.log(fruits["apple"])

// let fruits=["apple","orange","banana"]
// fruits[2]="chikoo"
// fruits[3]="mango"
// console.log(fruits)

// let fruits=["apple","orange","banana","grapes","mango"]
// console.log(fruits)

// for(let item of fruits){
//     console.log(item)
// }

// for(let item=0;item<fruits.length;item++){
//     console.log(fruits[item])
// }

// for (let item in fruits){
//     console.log(item)
//     console.log(fruits[item])
// }

// fruits.forEach((curElem,index,arr) => {
//     console.log(`${curElem} ${index}`)
//     // console.log(arr)
// });


// const mapArr=fruits.map((curElem,index,arr)=>{
//    return `${curElem} ${index}`
//     // console.log(`${curElem} ${index}`)
//     // console.log(arr)
// })

// console.log(mapArr)
// console.log(fruits)

// const numbers=[1,2,3,4,5,6]
// numbers.forEach((curElem)=>{
//  console.log(`${curElem*5}`)
// })

// var numbersArray=numbers.map((curElem)=>{
//     // console.log(`${curElem*5}`)
//     return `${curElem*5}`
//    })

//    console.log(numbersArray)



// let fruits=["apple","orange","mango","grapes","banana"]
// console.log(fruits.push("guava"))
// console.log(fruits)

// console.log(fruits.pop())
// console.log(fruits)

// console.log(fruits.unshift("kela"))
// console.log(fruits)

// console.log(fruits.shift())
// console.log(fruits)




// let fruits=["apple","orange","mango","grapes","banana"]
// fruits.splice(fruits.length,0,"chikoo")
// console.log(fruits)

// fruits.splice(fruits.length-1,0,"strawberry")
// console.log(fruits)

// fruits.splice(-1,0,"kela")
// console.log(fruits)

// fruits.splice(0,1,"wm")
// console.log(fruits)



// const numbers=[1,2,3,6,5,6,7,8,9]
// console.log(numbers.indexOf(4,5))
// console.log(numbers.indexOf(7,5))
// const result=numbers.indexOf(6)
// console.log(result)

// const numbers=[1,2,3,6,4,5,6,7,8,9]
// console.log(numbers.lastIndexOf(6))
// console.log(numbers.lastIndexOf(6,5))
// console.log(numbers.lastIndexOf(6,2))


// const Numbers=[1,2,3,6,4,5,6,7,8,9]
// console.log(Numbers.includes(6))




// const months=["Jan","march","April","June","July"]
// months.splice(months.length,0,"Dec")
// console.log(months)

// console.log(months.indexOf("march"))

// const toUpdate= months.splice(1,1,"March")
// console.log(months)

// console.log(months.indexOf("June"))

// const toDelete= months.splice(3,1)
// console.log(toDelete)
// console.log(months)


// const numbers=[1,2,3,4,5,4,6,7,8,9]
// const result=numbers.find((curElem)=>{
//   return curElem>6
// })

// console.log(result)


// const numbers=[1,2,3,4,5,6,7,8,9]
// const result=numbers.map((curElem)=>{
//     return `${curElem*5}`
// })
// console.log(result)


// const result2=result.findIndex((curElem)=>{
//     return curElem>35
// })

// console.log(result2)



// const numbers=[1,2,3,4,5,6,7,8,9]

// const result=numbers.filter((curElem)=>{
//     return curElem>5
// })
// console.log(result)



// const numbers=[1,2,3,4,6,5,6,7,8,9]
// let value =6

// const result=numbers.filter((curElem)=>{
//     return curElem!==value
// })
// console.log(result)


// const products=[
//     {name:"laptop", price:1200},
//     {name:"phone", price:800},
//     {name:"tablet", price:300},
//     {name:"smartwatch", price:150}
// ]

// const result=products.filter((curElem)=>{
//     return curElem.price>300
// })
// console.log(result)

// const numbers=[1,2,3,4,6,5,6,7,8,9]
// let uniqueValues=numbers.filter((curElem,index,arr)=>{
//     // console.log(index)
//     // console.log(arr.indexOf(curElem))
//     return index===arr.indexOf(curElem)
// })
// console.log(uniqueValues)
// console.log([...new Set(numbers)])


// const fruits=["banana","apple","orange","mango"]
// fruits.sort()
// console.log(fruits)

// var newFunction=fruits.sort((a,b)=>{
// if(a>b){return -1;} 
// else if(b>a) {return 1}
// })
// console.log(newFunction)


// const numbers=[1,2,3,4,5];
// let result=numbers.map((curElem)=>{
//     return curElem*curElem
// })

// console.log(result)



// const words=["apple","banana","cherry","date"]

// const result=words.map((curElem)=>{
//   return curElem.toUpperCase()
// })
// console.log(result)


// const numbers=[1,2,3,4,5]
// const result=numbers.map((curElem)=>{
//     if(curElem%2===0)
//     return curElem*curElem
// }).filter((curElem)=>curElem!==undefined)
// console.log(result)


// const result=numbers.map((curElem)=>curElem%2===0?curElem*curElem:undefined).filter((curElem)=>curElem!==undefined)
// console.log(result)

// const names=["ram","vinod","hari"]
// const result=names.map((curElem)=>  `Mr.${curElem}`)
// console.log(result)