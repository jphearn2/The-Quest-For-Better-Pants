
export class Map {
    public dungeon: string [][];

    constructor(){
        this.dungeon = [
            ["|", "_", "|", " ", " ", "|", "x", " ", "|"],
            ["|", ".", "|", ".", ".", "|", ".", ".", "|"]
        ];
    }
}