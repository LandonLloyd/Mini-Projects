var img = document.getElementById("img");
var body = document.getElementById("body");
var score = document.getElementById("score");
var arena = document.getElementById("arena");
var easyButton = document.getElementById("easy");
var mediumButton = document.getElementById("medium");
var hardButton = document.getElementById("hard");
var proButton = document.getElementById("pro");
var resetButton = document.getElementById("reset");

img.addEventListener("click", newPlace);
img.addEventListener("click", scoreBoard);
resetButton.addEventListener("click", resetScore);
easyButton.addEventListener("click", easyMode);
mediumButton.addEventListener("click", mediumMode);
hardButton.addEventListener("click", hardMode);
proButton.addEventListener("click", proMode);

function newPlace() {
  var randomMargin = Math.floor(Math.random() * 452);
  var randomLeft = Math.floor(Math.random() * 1285);
  img.style.margin = randomMargin + "px";
  img.style.marginLeft = randomLeft + "px";
}

function scoreBoard() {
  score.innerText++;
}

function resetScore() {
  score.innerText = 0;
  img.style.margin = 0;
}

function easyMode() {
  img.style.width = 100 + "px";
  img.style.height = 70 + "px";
}

function mediumMode() {
  img.style.width = 70 + "px";
  img.style.height = 50 + "px";
}

function hardMode() {
  img.style.width = 50 + "px";
  img.style.height = 40 + "px";
}

function proMode() {
  img.style.width = 30 + "px";
  img.style.height = 20 + "px";
  arena.style.backgroundColor = "#EBEBEB"
}
