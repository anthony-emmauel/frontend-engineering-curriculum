//Selecting html elements into JS using IDs
let button = document.getElementById("btn");

//Selecting html elements into JS using class
let formElement = document.getElementsByClassName("form-data");

//Selecting html elements into JS using tag
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);

//selecting html elements into JS using queryselector
let headingTwo = document.querySelector(".h2");

//How to change text content using JS

//.textcontent
let headingText = document.querySelector(".heading");
headingText.textContent = `welcome`;

//using InnerHTML
let headingElement = document.getElementById("header");
headingElement.innerHTML = `<p> This is a paragraph text </p>`;

//changing CSS styles using style property
button.style.color = "red";
button.style.backgroundColor = "black";

//adding and removing class in JS
let inputField = document.querySelector(".input-field");
inputField.classList.add("input-success");
inputField.classList.remove("input-field");
console.log(inputField);

//creating html element and putting an element inside another element

let container = document.getElementsByClassName("container");
let header4 = document.createElement("h4");
header4.textContent = `This is a text`;
console.log(header4);
