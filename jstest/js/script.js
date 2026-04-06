let number = 6;

let button = document.querySelector("#myButton");
let textElement = document.querySelector("#numberText");

function changeNumber() {
  number = 7;
  textElement.innerHTML = number; 
}

document.body.style.backgroundColor = "lightgreen";

button.addEventListener("click", changeNumber);