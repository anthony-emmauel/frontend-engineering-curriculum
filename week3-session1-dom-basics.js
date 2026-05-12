const title = document.getElementById("title");
title.textContent = "Hello Manny";

const description = document.querySelector(".description");
description.textContent = "This text was changed by JavaScript.";
description.classList.add("highlight");

const btn = document.getElementById("btn");
btn.textContent = "I was changed too";
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// getElementById
// Selects one element by its id. Fast and direct.
// jsdocument.getElementById('title') // grabs <h1 id="title">
// querySelector
// Selects the first element that matches a CSS selector. More flexible.
// jsdocument.querySelector('.description') // class → use .
// document.querySelector('#title')       // id → use #
// document.querySelector('p')            // tag → use tag name
// textContent
// Gets or sets the text inside an element.
// jselement.textContent = 'New text'; // changes what's displayed
// style
// Changes CSS directly on an element.
// jselement.style.backgroundColor = 'blue';
// element.style.color = 'white';
// classList
// Adds, removes, or toggles CSS classes on an element.
// jselement.classList.add('highlight');    // adds class
// element.classList.remove('highlight'); // removes class
// element.classList.toggle('highlight'); // switches on/off
