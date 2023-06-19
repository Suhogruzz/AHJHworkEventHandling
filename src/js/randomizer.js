export default class Randomizer {
    constructor() {
        this.randomList = new Set();
    }
    randomize() {
        while ([...this.randomList].length < 16)
        this.randomList.add(Math.floor(Math.random() * 16));
        let n = 0;
        setInterval(() => {
            const goblins = [...document.querySelectorAll(".goblin")];
            const activPosition = goblins.find(
            (el) => !el.classList.contains("hidden")
            );
            const pos = [...this.randomList][n];
            if (activPosition) {
                activPosition.classList.add("hidden");
                goblins.at(pos).classList.remove("hidden");
                } else {
                goblins.at(pos).classList.remove("hidden");
                }
                n >= 15 ? (n = 0) : n++;
            }, 1000);
    }
}