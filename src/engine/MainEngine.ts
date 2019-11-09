

export class Engine{
    private keyIn: string;

    constructor(){
        this.keyIn = "";
    }

    setKeyIn(stringIn: string){
        this.keyIn = stringIn;
    }

    getState(){
        
        return this.keyIn;
    }
}