// let a = 100
// const b = 200    // global scope
// var c = 300

// if (true){
//     let a = 10
//     const b= 20      // if ke andar block scope 
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c);

let a =300
if (true){
    let a = 10
    const b= 20      
    console.log("Inner value: ", a );
}

console.log(a);