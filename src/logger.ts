import { GameManager } from "./store";
const gameManager = new GameManager();

export function startLogger() {
    setInterval(() => {
        console.log(gameManager.logState());
    }, 4000)
}