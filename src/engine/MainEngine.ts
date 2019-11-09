

export class Engine{
    private keyIn: string;

    constructor(){
        this.keyIn = "";
    }

    setStorage(stringIn: string){
        if(stringIn.length === 1)
            this.keyIn = stringIn;

    }

    getStorage(){
        
        return this.keyIn;
    }
}