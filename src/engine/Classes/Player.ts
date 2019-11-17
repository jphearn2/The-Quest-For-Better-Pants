import { IPlayer } from "../../Interfaces/IPlayer";

export class Player{
    public maxHP: number;
    public hp: number;
    public str: number;
    public dex: number;
    public intel: number;
    public mapX: number;
    public mapY: number;

    constructor(){
        this.maxHP = 100;
        this.hp = 100;
        this.str = 5;
        this.dex = 5;
        this.intel = 5;
        this.mapX = 0;
        this.mapY = 0;
    }



    public toIPlayer() : IPlayer{
        let p = {
            maxHP: this.maxHP,
            hp: this.hp,
            str: this.str,
            dex: this.dex,
            intel: this.intel
        }

        return p;
    }
}