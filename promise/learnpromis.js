function f1(){
    console.log('this is first one')
}

let pro = new Promise(function(resolve){
    //function f2(){
        setTimeout(function(){
            console.log('this is second one')
            resolve()
        }, 2000)
    // }
})
pro.then(function(){
    console.log('this is third one')
})

// function f3(){
//     console.log('this is third one')
// }

f1()
console.log(pro)


// f1()
// f2()
// f3()