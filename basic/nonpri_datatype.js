// // array, functions, objects

// // let arr = [1, 2, 3, 4, 5]
// // console.log(arr)
// // console.log(typeof arr)

// let newarr = [1, 3, "stirng1", true, null]
// console.log(typeof newarr)
// console.log(newarr.slice(2,4))
// newarr.pop()
// console.log(newarr)
// newarr.push(10)
// console.log(newarr)
// newarr.shift()
// console.log(newarr)
// newarr.unshift(1)
// console.log(newarr)

//literal object 

// let student = {
//     rollNo: 10,
//     firstName: 'Shekhar',
//     lastName: 'C',
//     objectFunction : function(){
//         console.log("this function is in object")
//     },
//     totalMarks : 70 
// }

// student.objectFunction()

// student.std = 9 // add
// student.div = 'B'
// student.lastName = 'choudhari'

// console.log(student)

// delete student.div
// delete student.totalMarks

// console.log(student)

// functions  - 1. direct executions 2. return the logic or result
function hello(){
    console.log('Hello everyone')
}
hello()
// console.log(typeof hello)

// function add(a, b){
//     return a+b
// }
// console.log(add(10,20))
// console.log(typeof add)

// let c = function add(a, b){
//     return a+b
// }
// console.log(c(30,20))

// we can use functions in array and objects
// we can use arrays in functions and objects
// we can use objects in functions and arrays

let ar = [1, "rollNo", function arrfun(){console.log('in array')}, {obj : "this is object"}]
console.log(ar)
// console.log(ar["rollNo"])
// console.log(ar.arrfun())
console.log(ar[3].obj)
ar[2]()