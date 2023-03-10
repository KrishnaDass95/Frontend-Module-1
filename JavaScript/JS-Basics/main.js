
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
// console.log(a); // undefined -> variable declared but not defined.
// a = 10;
// console.log(a);
// var a = 10;
// console.log(a);

// // undefined vs not defined -> undef variable is declared but not initialised
// // not defined -> var is not declared and not initialised.

// // what is var? its a keyword, helps you re-declare and re-initialise a variable, var stays in global scope
// var a = 100;
// var a;
// // the above to does not throw an error.
// // only var was used in ES5

// // var's downside is that you can reinitialise the same variable and its value
// // again and again, var is globally scoped.



// // what is let?  -> can re-initialise a variable but not re-declare.
// // let seems to be locally scoped?
// let c = 100;
// c = 2000;
// // let variables are allocated to script / block or local memory. 
// // in script memory space, you cannot access a variable until its initialised a value.
// // const
// //TDZ temporal dead zone: period of time during which let and const declaration cannot be accessed.
// // TDZ below
// let d = 100;
// console.log(d);

// // const keyword, you cannot reinitialise and redeclare values
// // its used mainly for values like the value of pi and stuff
// // const is also hoisted, and it'll be same behaviour as let, 
// // they are in temporal dead zone, you cannot use it
// const e = 500;


// lets do pure and impure functions
// pure functions
function add(a, b){
    console.log(a+b);
}
add(10, 5);

// impure function
let c = 10; // it's an impure function as the function is dependent of values outside the function
function sum(b)
{
    console.log("impure func", c+b);
}
sum(100);
c = 1001;
sum(100);

// types of functions
// function declaration : creating a func to reserve memory in space
// hoisiting is possible in function declaration
funct_name() // you can call this function even before it's execution.
function funct_name(){
    console.log("func declaration");
}
funct_name(); // function invocation 


// function with arguments
function printFullName(fname, lname) // parameters
{
    return fname + " " + lname;
}
let name = printFullName("Krishna","Dass"); // arguments
console.log(name);

// string interpolation is joining two words
// two ways

console.log("yolo"+ " "+ "yala");
console.log(`my name is : ${name}`);


// function expression , 
// hoisting is not possible
// storing function inside a variable(man this is wild)
let func = function() { // this function has no name, annonymous functions -> they have no name
    console.log("func declaration yo");
}
func();

// arrow function, came in ES6 -> short hand function
let printName = () => { // this is also an anonymous function with no name, it's a variable name
    console.log("name:", "Hammerooogrammoo")
}
printName()

let sumTwoNums = (x, y) =>{
    return x+y;
}

// single line functions using arrows
let productTwoNums = (x, y) => x*y;
console.log(productTwoNums(10, 5));