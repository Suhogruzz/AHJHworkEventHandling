import Goblin from "./goblin";
import Gameplay  from "./gameplay";
import Randomizer from "./randomizer";


const startBtn = document.querySelectorAll(".start");
const mainMenu = document.querySelector(".start-menu-container");
const newGame = document.querySelector(".new-menu-container")

export function mainGameLogic() {
  let randomPosition = null;
  [...document.querySelectorAll(".field")].forEach((el) => {
    new Goblin(el);
  });
  randomPosition = new Randomizer();
  randomPosition.randomize();
  let gameplay = new Gameplay();
  gameplay.game();
};

[...startBtn].forEach((el) => {
  el.onclick = () => {
    mainMenu.classList.add("hidden");
    newGame.classList.add("hidden");
    mainGameLogic();
}})


