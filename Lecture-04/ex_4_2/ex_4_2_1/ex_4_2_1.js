//Select the element with the class output.
var e = document.querySelector(".output");

//Create another JavaScript object called mainList
let mainList = "mainList"

//Update the ID of the output ul tag to mainList
var f = document.querySelector("ul");
f.setAttribute("id", "mainList");

//Search for the tagName of each div, and output them into the console as an array.
var search = document.getElementsByTagName("div");
console.log(search);

//Using a for loop, set the ID of each of the div tags to id with a numeric value of the order they appear within output.
for (let i = 0; i < HTMLCollection.length; i++) {
    console.log(HTMLCollection[i]);
}