// 1. selecting elements in a document
// getElementById() gets elemet with id that we pass
let title = document.getElementById("title");
title.innerText = "Krishna changed the title";
console.log(title);
let title2 = document.getElementById("hello");
console.log(title2);

// querySelector() -> gets all elements with specified selector
let listItem = document.querySelector("li");
listItem.innerText = "sup bro!!"
console.log(listItem);

let listItem2 = document.querySelector(".item-2");
listItem2.innerText = "Hi my man!";

//querySelectorAll()

let li = document.querySelectorAll("li");
for(let i = 0; i < li.length; i++)
{
    li(i).innerText = "hey";
}
console.log(li);
