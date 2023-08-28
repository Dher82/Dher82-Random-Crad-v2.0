/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector(".card").innerHTML = generateRandomNumber();
  // console.log("Hello Rigo from the console!");
  document.querySelector("#Boton_Cartas").addEventListener("click", () => {
    document.querySelector(".card").innerHTML = generateRandomNumber();
  });
  document.querySelector("#card-width").addEventListener("change", e => {
    document.querySelector("#card").style.width = e.target.value + "px";
  });
  document.querySelector("#card-height").addEventListener("change", e => {
    document.querySelector("#card").style.height = e.target.value + "px";
  });
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  document
    .querySelector(".card")
    .setAttribute("class", "card " + generateRandomSuit());
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
// window.redimensionar = function redimensionar() {
//   console.log("hola");
// };
