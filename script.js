"use strict";

const rockPlayer = document.querySelector("#rock");
const paperPlayer = document.querySelector("#paper");
const ScissorsPlayer = document.querySelector("#scissors");
let scorePlayer = 0;
let scoreComp = 0;

//  WHEN PLAYER CHOOSES ROCK

rockPlayer.addEventListener("click", function () {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];

  document.querySelector(".comp").textContent =
    "Maggy chose" + " " + thing + "!";

  console.log(thing);

  if (thing && scorePlayer > 9) {
    document.querySelector(".result").innerHTML = " NIGGA WINS!🏆🏆🏆";
  } else if (thing && scoreComp > 9) {
    document.querySelector(".result").innerHTML = "MAGGY WINS! 🏆🏆🏆";
  } else if (thing === "Rock") {
    document.querySelector(".result").innerHTML =
      "You Chose Rock too <br> <br> Try again!";
    document.querySelector(".high").textContent = scorePlayer;
    document.querySelector(".low").textContent = scoreComp;
  } else if (thing === "Paper") {
    document.querySelector(".result").innerHTML =
      " Oops! You Chose Rock <br> <br> You lose!";
    scoreComp++;
    document.querySelector(".low").textContent = scoreComp;
  } else if (thing === "Scissors") {
    document.querySelector(".result").innerHTML =
      "You Chose Rock <br> <br> You Win!";
    scorePlayer++;
    document.querySelector(".high").textContent = scorePlayer;
  }
});

//  WHEN PLAYER CHOOSES PAPER

paperPlayer.addEventListener("click", function () {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];

  document.querySelector(".comp").textContent =
    "Maggy chose" + " " + thing + "!";

  console.log(thing);

  if (thing && scorePlayer > 9) {
    document.querySelector(".result").innerHTML = " NIGGA WINS!🏆🏆🏆";
  } else if (thing && scoreComp > 9) {
    document.querySelector(".result").innerHTML = "MAGGY WINS! 🏆🏆🏆";
  } else if (thing === "Rock") {
    document.querySelector(".result").innerHTML =
      " You Chose Paper <br> <br> You Win! ";

    scorePlayer++;
    document.querySelector(".high").textContent = scorePlayer;
  } else if (thing === "Paper") {
    document.querySelector(".result").innerHTML =
      "You Chose Paper too <br> <br> Try again!";

    document.querySelector(".high").textContent = scorePlayer;
    document.querySelector(".low").textContent = scoreComp;
  } else if (thing === "Scissors") {
    document.querySelector(".result").innerHTML =
      " Oops! You Chose Paper <br> <br> You lose!";
    scoreComp++;
    document.querySelector(".low").textContent = scoreComp;
  }
});

// WHEN PLAYER CHOOSES SCISSORS

ScissorsPlayer.addEventListener("click", function () {
  let things = ["Rock", "Paper", "Scissors"];
  let thing = things[Math.floor(Math.random() * things.length)];

  document.querySelector(".comp").textContent =
    "Maggy chose" + " " + thing + "!";

  console.log(thing);

  if (thing && scorePlayer > 9) {
    document.querySelector(".result").innerHTML = " NIGGA WINS!🏆🏆🏆";
  } else if (thing && scoreComp > 9) {
    document.querySelector(".result").innerHTML = "MAGGY WINS! 🏆🏆🏆";
  } else if (thing === "Rock") {
    document.querySelector(".result").innerHTML =
      " Oops! You Chose Scissors <br> <br> You lose! ";
    scoreComp++;
    document.querySelector(".low").textContent = scoreComp;
  } else if (thing === "Paper") {
    document.querySelector(".result").innerHTML =
      "You Chose Scissors <br> <br> You win!";

    scorePlayer++;
    document.querySelector(".high").textContent = scorePlayer;
  } else if (thing === "Scissors") {
    document.querySelector(".result").innerHTML =
      "You Chose Scissors too <br> <br> Try again!";

    document.querySelector(".high").textContent = scorePlayer;
    document.querySelector(".low").textContent = scoreComp;
  }
});

// WINNER DECIDER

// if (thing && scorePlayer > 9) {
//   document.querySelector(".result").innerHTML = " NIGGA WINS 🏆🏆🏆";
// } else if (thing && scoreComp > 9) {
//   document.querySelector(".result").innerHTML =
//     " UNFORTUNATELY MAGGY WINS 🏆🏆🏆";
// }

// ARRAY RANDOM SELECTION 
// let things = ["Rock", "Paper", "Scissors"];
// let thing = things[Math.floor(Math.random() * things.length)];

// console.log(thing);

// if (thing) {
//   document.querySelector(".comp").textContent =
//     "Maggy chose" + " " + thing + "" + "!";
// }