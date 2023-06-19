/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  constructor(el) {
    const div = document.createElement("div");
    div.classList.add("goblin", "hidden");
    el.insertAdjacentElement("afterbegin", div);
  }
}
;// CONCATENATED MODULE: ./src/js/gameplay.js
class Gameplay {
  constructor() {
    this.playingField = document.querySelector('.playing-field');
    this.playingFieldScore = document.querySelector('.playing-field-score');
    this.newMenu = document.querySelector('.new-menu-container');
    this.newMenuScore = document.querySelector('.new-menu-score');
    this.buttons = document.querySelectorAll('.start');
  }
  game() {
    let hiddenMiss = 0;
    let score = 0;
    this.playingField.onclick = el => {
      let target = el.target;
      if (target.classList.contains('goblin')) {
        this.playingFieldScore.textContent = score += 1;
      } else {
        hiddenMiss += 1;
      }
      if (hiddenMiss === 5) {
        this.newMenuScore.textContent = score;
        this.newMenu.classList.remove('hidden');
        score = 0;
        hiddenMiss = 0;
        [...this.buttons].forEach(el => {
          el.onclick = () => {
            window.location.reload();
          };
        });
      }
    };
  }
}
;// CONCATENATED MODULE: ./src/js/randomizer.js
class Randomizer {
  constructor() {
    this.randomList = new Set();
  }
  randomize() {
    while ([...this.randomList].length < 16) this.randomList.add(Math.floor(Math.random() * 16));
    let n = 0;
    let i = setInterval(() => {
      const goblins = [...document.querySelectorAll(".goblin")];
      const activPosition = goblins.find(el => !el.classList.contains("hidden"));
      const pos = [...this.randomList][n];
      if (activPosition) {
        activPosition.classList.add("hidden");
        goblins.at(pos).classList.remove("hidden");
      } else {
        goblins.at(pos).classList.remove("hidden");
      }
      n >= 15 ? n = 0 : n++;
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



const startBtn = document.querySelectorAll(".start");
const mainMenu = document.querySelector(".start-menu-container");
const newGame = document.querySelector(".new-menu-container");
function mainGameLogic() {
  let randomPosition = null;
  [...document.querySelectorAll(".field")].forEach(el => {
    new Goblin(el);
  });
  randomPosition = new Randomizer();
  randomPosition.randomize();
  let gameplay = new Gameplay();
  gameplay.game();
}
;
[...startBtn].forEach(el => {
  el.onclick = () => {
    mainMenu.classList.add("hidden");
    newGame.classList.add("hidden");
    mainGameLogic();
  };
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;