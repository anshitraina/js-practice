// console.log("A");
// console.log("N");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T"); 


function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");   //FUNCTION DEFINATION
    console.log("H");
    console.log("I");
    console.log("T"); 
}

// sayMyName()

// function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
//     console.log(number1+number2);
// }
// addTwoNumbers(2,4)  // (2,4) = arguments 

// function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(3, 5)
// console.log("The result is: ", result);  // undefinded result

function addTwoNumbers(number1 , number2){   //(number1 , number2)= parameters
   // let result = number1+ number2
   // return result
     return number1+ number2
    console.log("My name is anshit"); // it will not print as it doenst work after return in a function
      
}
const result = addTwoNumbers(3, 5)
// console.log("The result is: ", result);  // undefinded result


function loginUserMessage(username = "Machine"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Anshit"));