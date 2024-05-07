interface Game{
    id : string,
    whitePlayer : string,
    blackPlayer : string,
    moves: string[];
}

export class GameManager {
    private games : Game[] = []

    constructor(){
        this.games = []
    }

    addmove(gameId : string, move : string){
        console.log(`adding move ${move} to game ${gameId}`)
        const game = this.games.find(game=> game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId :string){
        const game = {
            id: gameId,
            whitePlayer : 'Pratik',
            blackPlayer : 'test',
            moves : []
        }
        this.games.push(game);
    }
    public logState() {
        console.log(this.games);
    }
}
export const gameManager = new GameManager();