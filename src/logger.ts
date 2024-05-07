import { gameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(gameManager.logState());
    }, 4000)
}