export default class Goblin {
    constructor(el) {
        const div = document.createElement("div");
        div.classList.add("goblin", "hidden");
        el.insertAdjacentElement("afterbegin", div);
    }
}