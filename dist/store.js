"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addmove(gameId, move) {
        console.log(`adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayer: 'Pratik',
            blackPlayer: 'test',
            moves: []
        };
        this.games.push(game);
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
