// new Date()
// new Date(date,string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

// 1. new Date(): 
// const currentdate=new Date()
// console.log(currentdate)

// 2. new Date(date string)
// const dateString="2024-06-10T06:35:19.087Z"
// const dateFromString=new Date(dateString)
// console.log(dateFromString)

// 3.new Date(year,month)
// const date1=new Date(2025,12)
// console.log(date1)

// 4.new Date(year,month,day)
// const date2=new Date(2024,1,19)
// console.log(date2)

// 5.new Date(year,month,day,hours)
// const date3=new Date(2024,1,19,10)
// console.log(date3)

// 6.new Date(year,month,day,hours,minutes)
// const date4=new Date(2024,1,19,10,40)
// console.log(date4)


// 7.new Date(year,month,day,hours,minutes,seconds)
// const date6=new Date(2024,1,19,10,40,9)
// console.log(date6)

// 8.new Date(year,month,day,hours,minutes,seconds,ms)
// const date7=new Date(2024,1,19,10,40,9,274)
// console.log(date7)

// 9.new Date(milliseconds)
// const curMilliSeconds=new Date().getTime()
// console.log(curMilliSeconds)
// const dateFromCurMilliSecond=new Date(curMilliSeconds)
// console.log(dateFromCurMilliSecond)


// Note: i.)- Javascript counts months from 0 to 11
            //   januray-0 to december-11

        //  ii.) javascript stores dates as a number of milliseconds since January 01,1970



// const date1=new Date("2024-01-05")
// console.log(date1)
// const date2=new Date("january-05,2024")
// console.log(date2)


//  <!-------------- JS get Date Methods/Getting components---------------!>

// const currentDate=new Date()
// // console.log(currentDate)
// // const year=currentDate.getFullYear()
// // const month=currentDate.getMonth()
// // const date=currentDate.getDate()
// const day=currentDate.getDay()
// console.log(day)

// Note:-the first day of week  (day0) is sunday
// day of the week (0 for sunday, 1 for monday,..........,6 for saturaday)

//                       <!------------------- !>





// <!--------- Set date Methods/ setting components---------- !>

// const date=new Date(); 
// date.setFullYear(2025)
// console.log(date)

// const date=new Date();
// date.setMonth(9)
// console.log(date)

// const date=new Date();
// date.setDate(9)
// console.log(date)


// const date=new Date();
// date.setFullYear(2026,9,19)
// console.log(date)

//                <!---------------------------!>




// <!-------------- JS get Time Methods/Getting components---------------!>


// const currentTime=new Date()
// console.log(currentTime)
// const hours=currentTime.getHours()
// const hours=currentTime.getMinutes()
// const hours=currentTime.getSeconds()
// console.log(hours)


// const currentTime=new Date().getTime()
// console.log(currentTime)

//                <!---------------------------!>




// <!-------------------JS set time Methods/ getting components---------------------!>

// const date=new Date()
// date.setHours(10)
// console.log(date)

// const date=new Date()
// date.setMinutes(34)
// console.log(date)

// const date=new Date()
// date.setSeconds(12)
// console.log(date)


// const date= new Date()
// date.setMilliseconds(123)
// console.log(date)


// const date=new Date()
// date.setTime(1718016063478)
// console.log(date)

//                  <!--------------------------!>



// <!----------------Useful Methods ----------------!>

// const date=new Date()
// const localString=date.toLocaleString()
// console.log(localString)

// const date=new Date()
// const localString=date.toLocaleDateString()
// console.log(localString)

// const date=new Date()
// const localTimeString=date.toLocaleTimeString()
// console.log(localTimeString)

// const dateString="2024-06-10T10:41:03.478Z"
// const parsedData=Date.parse(dateString)
// console.log(parsedData)

// const newDate=new Date(parsedData)
// console.log(newDate)

// <!---------------------------------------------!>

// let newDate=new Date("January 05,2010")
// console.log(Date.now())
// console.log(newDate.getTime())


// <!-----------------------------Interview questions---------------------------!>

// Q.1
// const addDaysToDate=(date,extraDay)=>{
//     // console.log(date)
//     // console.log(date.setDate(date.getDate()+extraDay))
//     const updatedDate=date.setDate(date.getDate()+extraDay)
//     return new Date(updatedDate)
// }



// const date= new Date("2024-02-29")
// const newDate=addDaysToDate(date,7)

// console.log(newDate)
// console.log(newDate.toLocaleDateString())


//Q.2

// const getDaysDifference=(date1,date2)=>{
//     let oneDay=24*60*60*1000
//     let diff=Math.abs(date2-date1)
//     // console.log(diff)
//     return Math.round(diff/oneDay)


// }


// const date1= new Date("2024-02-19")
// const date2= new Date("2024-03-01")
// console.log(getDaysDifference(date1,date2))
