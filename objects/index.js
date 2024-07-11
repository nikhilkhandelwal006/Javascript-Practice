// objects are fundamental parts of js, providing a way to group related data and function together. In JS, an object is a collection of key-value pair, where each key in a string (or a symbol) and each value can be any data types,including other objects. Objects can have properties and methods, making them versatile for various use cases.

 //  // ** creating objects:-


// const products={
//     id:1,
//     pName:"laptop",
// };
// console.log(products)


// let person={
//     name:"vinod",
//     age:30,
//     inStudent:false,
//     greet:function(){
//         console.log("welcome to world best css")
//     },
// };
// console.log(person)


// let person={
//     name:"vinod",
//     age:30,
//     "is'Student":false,
//     greet:function(){
//         console.log('welcome to world best js')
//     },
// }
// console.log(person)


//  * Accessing Objects properties:

// console.log(person.age)
// console.log(person.name)
// console.log(person["is'Student"])


//  * Adding and modifying properties:

//    person.job="web dev"
//    console.log(person)

// //   person.age=18;
// //   console.log(person)

//   person["age"]=20
//   console.log(person)

//   person["gender"]="Male";
//   console.log(person)



//    * Methods:
//    Methods in objects are functions associated with the object. They can be involved using the same notation properties.


// person.greet()


//   * we can add dynamic keys in an object:

// let idType="studentId";

// let student={
//     name:"nikhil",
//     [idType]:"A1234",// dynamic key based on idType
//     sAge:24,
//     isStudent:true,
//     greet:function(){
//         console.log(`my ${idType} is ${student[idType]} and my name is ${student.name}`)
//     }

// }


// student.greet()


//    * Parsing by value:

    //  let a =10
    //  let modifyValue=(x)=>(x=20)
    //  console.log(modifyValue(a))
    //  console.log(a)


//    * Parsing by refrence:
 
    // let obj={id:5, name:"kodyfier"};
    // let obj1=obj;

    // obj1.name="thapa technical"
    // console.log(obj1)
    // console.log("original:",obj)


    // let obj={id:5, name:"kodifier"}
    // let obj1={}
    // let newObj=Object.assign(obj1,obj)

    // newObj.name="thapa technical"
    // console.log(newObj)
    // console.log("original",obj)


    // * comparison by refrence:-
    
//     const obj1={name:"vinod"}
//     const obj2={name:"vinod"}
//     const obj3=obj1

// //    const isEqual= ((obj1==obj2)?true:false);
//    const isEqual= ((obj1==obj3)?true:false);

//     console.log(isEqual)





//  * JSON(js object notation):


//     let id="studentId"
// let student={
//     [id]:1,
//     sName:"vinod",
//     sAge:29,
//     isStudent:false,
//     greet:function(){
//         console.log(`hey my Id is ${student[id]} & my name is ${student.sName}`)
//     },
// }
    
// student.greet()


// let jsonData=JSON.stringify(student)
// console.log(jsonData)

// let jsonParse=JSON.parse(jsonData)
// console.log(jsonParse)


// * "this" object:


//  function callme(){
//     console.log(this)
//  }
//  callme()  // this will refer to global object



//  const obj={
//     name: "nikhil",
//     greet:function(){
//         console.log(this);
//     },
//  }
//  obj.greet()


// const obj={
//     name:"nikhil Khandelwal",
//     greet(){
//         console.log(this)
//     },
// }

// obj.greet()


// const obj={
//     name:"nikhil Khandelwal",
//     greet:()=>{
//         console.log(this)
//     },
// }

// obj.greet()

//   * objects useful methods:
// 
//  const products={
//     id:1,
//     name:"laptop",
//     category:"computers",
//     brand:"exampleBoard",
//     price:999.99,
//     stock:50,
//     description:"powerful laptop eith a quad-core i5 processor, 8 GB ram, 256GB and 14 inch display"
//  }

//  let keys=Object.keys(products)
//  console.log(keys)

//  let values=Object.values(products)
//  console.log(values)

//  let entries=Object.entries(products)
//  console.log(entries)

//  let hasownproperty=products.hasOwnProperty("name")
//  console.log(hasownproperty)


//  const target={a:1,b:5};
//  const source={b:3,c:4};
//  const source2={c:5,d:7}
//  const mergedObject=Object.assign(target,source,source2)
//  console.log(mergedObject)

//  Object.freeze(products)
//  products.id="5656"
//  console.log(products)


// const target={a:1,b:2}
// const source={b:3, c:4}


// const mergedObject=Object.assign({},target,source)
// console.log(mergedObject)



const student={
    name:"nikhil",
    age:20,
    grade:{
        math:90,
        science:55,
        english: 19,
    },
}

const addSubjectGrade=(student,subject,marks)=>{

    return student.grade[subject]=marks
}




addSubjectGrade(student, "computer", 92);
console.log(student);
