let flipper = document.getElementById("flipper");
let display = document.getElementById("display");


flipper.addEventListener("click", flipCoin);

function flipCoin(){
  let randomNum = Math.floor(Math.random() * 2);
  if(randomNum < 1){
    display.innerText = "Heads!"
    console.log("Heads!")
    console.log(randomNum)
  }else{
    display.innerText = "Tails!"
    console.log("Tails!")
    console.log(randomNum)
  }
}
