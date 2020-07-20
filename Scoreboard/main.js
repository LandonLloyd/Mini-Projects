 
var teamscore1 = document.getElementById("team1score");
var teamscore2 = document.getElementById("team2score");
var loseBtn = document.getElementById("lose");
var reset1 = document.getElementById("reset");
var gain1 = document.getElementById("gain");
var loseBtn2 = document.getElementById("loset2");
var reset2 = document.getElementById("reset2");
var gain2 = document.getElementById("gain2");


loseBtn.addEventListener("click", lose1);
gain1.addEventListener("click", gaint1);
reset1.addEventListener("click",res1);

loseBtn2.addEventListener("click", lose2);
gain2.addEventListener("click", gaint2);
reset2.addEventListener("click", res2);

function lose1() {
  teamscore1.innerText--;
}
function gaint1(){
  teamscore1.innerText++;
}
function res1(){
  teamscore1.innerText = 0;
}

function lose2() {
  teamscore2.innerText--;
}
function gaint2(){
  teamscore2.innerText++;
}
function res2(){
  teamscore2.innerText = 0;
}
