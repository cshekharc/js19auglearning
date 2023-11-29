// do while loop

// let i =1
// do{
//     console.log(i)
//     i++
// }while(i>=5)

// while loop
// let i = 1
// while (i<=5){
//     console.log(i)
//     i++
// }

//for loop
// for(let i=1; i<=5; i++){
//     console.log(i)
// }

// for...in loop -> when we are dealing with object
// let courses = {
//     tech : "ATT",
//     fees : 30000,
//     location: "online",
//     batch : "19 Aug"
// }

// for (let course in courses) {
//     console.log(courses[course])
//     // if(courses[course] === "ATT"){
//     //     console.log(courses.fees)
//     // }
// }

//for...of -> when we are dealing with array

// let arr =  [4, 10, "abc", true]

// for(let ar of arr){
//     if(ar === 10){
//         console.log('name is there in list')
//         break
//     }else if(ar!= 10){
//         console.log('name is not there in list')
//         break
//     }else{
//         continue
//     }
// }

let arr =  [4, 10, "abc", true];

let nameFound = false;

for (let ar of arr) {
    if (ar === 15) {
        console.log('name is there in list');
        nameFound = true;
        break;
    } else {
        continue;
    }
}

if (!nameFound) {
    console.log('name is not there in list');
}
