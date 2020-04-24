// Write your code here!

let element = document.querySelector("main#main");

element.remove();

let newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

document.body.appendChild(newHeader);

// let newHeader = document.querySelector("h1#victory");

let text = document.createTextNode("YOUR-NAME is the champion");

newHeader.appendChild(text);