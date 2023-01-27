
// let x; //  declaration - just allocates space in memory, a variable is a container
// let laa = 100; // declaration and assignment -> giving value to a variable
// let a = "hello";
// console.log(a);
// document.write(a);

// Interactions in JS: alerts, prompt, confirm
// alert("something went wrong");

// prompt(text, default value)

// var value = prompt("What is your name", "default value"); in prompt cancel is false
// console.log(value); 
// var age = parseInt(prompt("What is your age?")); // converts string to integer
// // let age = 19;
// console.log("datatype is ", typeof(age));
// if(age > 18)
// {
//     console.log("eligible");
// }
// else{
//     console.log("nay");
// }
// // if you click on cancel in prompt, it takes the value null, its datatype is an object

// // confirm
// var result = confirm("is user adult?");
// console.log(result);
// okay -> true, cancel -> false

// var, let and const -> they are keywords to define variable
// hoisting is a JS behaviour that makes you use a function and variables before declaration, it applies for var, let and const
console.log(a); // undefined -> variable declared but not defined.
a = 10;
console.log(a);
var a = 10;
console.log(a);

// undefined vs not defined -> undef variable is declared but not initialised
// not defined -> var is not declared and not initialised.

// what is var? its a keyword, helps you re-declare and re-initialise a variable, var stays in global scope
var a = 100;
var a;
// the above to does not throw an error.
// only var was used in ES5

// var's downside is that you can reinitialise the same variable and its value
// again and again, var is globally scoped.



// what is let?  -> can re-initialise a variable but not re-declare.
// let seems to be locally scoped?
let c = 100;
c = 2000;
// let variables are allocated to script / block or local memory. 
// in script memory space, you cannot access a variable until its initialised a value.
// const
//TDZ temporal dead zone: period of time during which let and const declaration cannot be accessed.
// TDZ below
console.log(d);
let d = 100;
console.log(d);



