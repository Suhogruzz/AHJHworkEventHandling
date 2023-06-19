export default class Gameplay {
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
        this.playingField.onclick = (el) => {
            let target = el.target;
            if(target.classList.contains('goblin')) {
                this.playingFieldScore.textContent = score+=1;
            } else {
                hiddenMiss+=1;
            }
            if(hiddenMiss === 5) {
                this.newMenuScore.textContent = score;
                this.newMenu.classList.remove('hidden');
                score = 0;
                hiddenMiss = 0;
                [...this.buttons].forEach((el) => {
                    el.onclick = () => {
                        window.location.reload()
                  }})
            }
        }
    }
}