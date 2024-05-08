import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "pratik",
        "blackPlayer": "test",
        moves: []
    })
}, 5000)

//ws server