var change = document.getElementById("change");
var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var body = document.getElementById("body");

darkButton.addEventListener("click", darkMode);

lightButton.addEventListener("click", lightMode);

function darkMode() {
  body.style.color = "white";
  body.style.backgroundColor = "black";
  darkButton.style.backgroundColor = "white";
  darkButton.style.color = "black";

  lightButton.style.backgroundColor = "white";
  lightButton.style.color = "black";
}

function lightMode() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
  darkButton.style.backgroundColor = "black";
  darkButton.style.color = "white";

  lightButton.style.backgroundColor = "black";
  lightButton.style.color = "white";
}
