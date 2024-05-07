import { GameManager } from "./store";


export function startLogger() {
    setInterval(() => {
        console.log(games);
    }, 4000)
}