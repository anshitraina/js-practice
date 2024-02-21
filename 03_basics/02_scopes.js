//There are three types of scope in js
// Block Scope : 
// {
//   var x = 2;
// }
// x can NOT be used here
// **********************************//
// Function Scope:
// function myFunction() {
//     var carName = "Volvo";   // Function Scope
//   }
//***********************************//
// Global scope 
// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }
// **********************************//

// let a = 100
// const b = 200    // global scope: outside any function 
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