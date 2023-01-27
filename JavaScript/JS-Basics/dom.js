// 1. selecting elements in a document
// getElementById() gets elemet with id that we pass
let title = document.getElementById("title");
title.innerText = "Krishna changed the title";
console.log(title);
let title2 = document.getElementById("hello");
console.log(title2);

// querySelector() -> gets all elements with specified selector
let listItem = document.querySelector("li");
console.log(listItem);