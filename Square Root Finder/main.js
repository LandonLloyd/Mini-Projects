let input = document.getElementById("input");
let button = document.getElementById("button");
let display = document.getElementById("display");

button.addEventListener("click", squareRoot);

function squareRoot() {
  const parsed = parseInt(input.value, 10);
  if (!isNaN(parsed)) {
    let sqrt = Math.sqrt(input.value);
    display.innerText = "The square root of " + input.value + " is " + sqrt;
  } else {
    display.innerText = input.value + " is not a number!";
  }
}
