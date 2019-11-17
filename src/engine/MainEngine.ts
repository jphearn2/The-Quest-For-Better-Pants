import { IPlayer } from "../Interfaces/IPlayer";
import { Player } from "./Classes/Player";

export class Engine{
    private keyIn: string;
    private player: Player;

    constructor(){
        this.keyIn = "";
        this.player = new Player();
    }

    setKeyIn(stringIn: string){
        this.keyIn = stringIn;
    }

    getState(){
        
        return this.keyIn;
    }

    getPlayerState(): IPlayer{
        return this.player.toIPlayer();
    }
}