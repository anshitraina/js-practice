// // **************This Keyword**************
// // This is about current context
// const user = {
//     username: "Anshit",
//     price: 999,

//     welcomeMessage: function name() {
//         console.log(`${this.username} , welcome to website`);
//         // console.log(this);
//     }
//  }
// // user.welcomeMessage()
// // user.username = "sam" // here we changed the context
// // user.welcomeMessage()

// console.log(this);

//  function chai() {
//     let username = "anshit"
//     console.log(this.username);  // we cannot access this in function
    
//  }
//  chai()

// const chai = function(){
//     let username = "anshit"
//     console.log(this.username);
// }
// chai()
// ******************Arrow Functions*****************
const chai = () =>{
    let username = "anshit"
    console.log(this.username);
}
chai()