// Write your code here!
document.querySelector('main#main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Liz is the champion";

document.body.appendChild(newHeader);
