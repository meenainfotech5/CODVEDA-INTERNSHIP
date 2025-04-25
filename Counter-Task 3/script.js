
const clickSound = new Audio("mixkit-typewriter-soft-click-1125.mp3");
const counterDisplay = document.getElementById("counter")
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");

let count = 0;

increasebtn.addEventListener("click", () => {
  clickSound.play();
    count++;
    counterDisplay.textContent = count;
});

resetbtn.addEventListener("click", () => {
    clickSound.play();
    count = 0;
counterDisplay.textContent = count;
count;
});

decreasebtn.addEventListener("click" , () => {
    clickSound.play();
   if(count > 0){
    count--;
   }
    counterDisplay.textContent = count;
    count;
});

