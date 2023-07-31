let currMole;
let currPlant;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let index = 0; index < 9; index++) {
    let box = document.createElement("div");
    box.id = index.toString();
    box.addEventListener("click", setBoxClick);
    document.getElementById("board").appendChild(box);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}
let randomeNum = () => {
  let randome = Math.floor(Math.random() * 9);
  return randome.toString();
};

let setMole = () => {
  if (gameOver) {
    return;
  }

  if (currMole) {
    currMole.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./images/monty-mole.png";

  let num = randomeNum();
  if (currPlant && currPlant.id === num) {
    return;
  }
  currMole = document.getElementById(num);
  currMole.appendChild(mole);
};

let setPlant = () => {
  if (gameOver) {
    return;
  }

  if (currPlant) {
    currPlant.innerHTML = "";
  }

  let snack = document.createElement("img");
  snack.src = "./images/piranha-plant.png";

  let num = randomeNum();
  if (currMole && currMole.id == num) {
    return;
  }
  currPlant = document.getElementById(num);
  currPlant.appendChild(snack);
};

function setBoxClick() {
  if (gameOver) {
    return;
  }
  if (this === currMole) {
    score = score + 10;
    document.getElementById("score").innerHTML = score;
  } else if (this === currPlant) {
    document.getElementById("score").innerHTML = ` GAME OVER ${score}`;
    gameOver = true;
  }
}
