interface Game{
    id : string,
    whitePlayer : string,
    blackPlayer : string,
    moves: string[];
}

export class GameManager {
    games : Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }

    //for globally getting getInstance used static
    public static getInstance(){
        //create single instance of game manager and return it
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.getInstance;
    }

    public addmove(gameId : string, move : string){
        console.log(`adding move ${move} to game ${gameId}`)
        const game = this.games.find(game=> game.id === gameId);
        game?.moves.push(move)
    }

    public addGame(gameId :string){
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

