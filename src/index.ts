import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        "whitePlayer": "test",
        "blackPlayer": "test",
        moves: []
    })
}, 5000)
