import { IPlayer } from "../Interfaces/IPlayer";

export class Engine{
    private keyIn: string;
    private player: IPlayer;

    constructor(){
        this.keyIn = "";
        this.player = {
            maxHP: 100,
            hp: 100,
            str: 5,
            dex: 5,
            intel: 5
        }
    }

    setKeyIn(stringIn: string){
        this.keyIn = stringIn;
    }

    getState(){
        
        return this.keyIn;
    }

    getPlayerState(): IPlayer{
        return this.player;
    }
}