//js - var, let and const
 
// var - 1. redeclaration and reassignment both are possible
// 2. global and local scope are not well defined
// var fname = "shekhar"
// console.log(fname)
// var fname = "chandrashekhar"
// console.log(fname)

// var a = 10
// {
//     // scope
//     var a = 20
//     console.log(a)
// }
// console.log(a)

// let a = 10
// console.log(a)
// // let a = 20 // redeclaration is not possible with let
// a = 20 // but reassignment is possible
// console.log(a)
// let b = 10
// {
//     // scope
//     let b = 20
//     console.log(b)
// }
// console.log(b)

// const: we can not redeclare and reassign the variable

const c = 100;
console.log(c)

const d = 500
{
    const d = 600
    console.log(d)
}
console.log(d)


