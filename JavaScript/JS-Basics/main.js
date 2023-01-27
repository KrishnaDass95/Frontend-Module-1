
let x; //  declaration - just allocates space in memory, a variable is a container
let laa = 100; // declaration and assignment -> giving value to a variable
let a = "hello";
console.log(a);
document.write(a);

// Interactions in JS: alerts, prompt, confirm
// alert("something went wrong");

// prompt(text, default value)

// var value = prompt("What is your name", "default value"); in prompt cancel is false
// console.log(value); 
var age = parseInt(prompt("What is your age?")); // converts string to integer
// let age = 19;
console.log("datatype is ", typeof(age));
if(age > 18)
{
    console.log("eligible");
}
else{
    console.log("nay");
}
// if you click on cancel in prompt, it takes the value null, its datatype is an object

// confirm
var result = confirm("is user adult?");
console.log(result);
// okay -> true, cancel -> false
