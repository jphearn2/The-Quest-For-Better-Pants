import React from "react"
import { IPlayer } from "../Interfaces/IPlayer";

interface IProps {
    player: IPlayer
}

export class PlayerDisplay extends React.Component <IProps> {
    constructor(props: IProps){
        super(props)
    }

    render(){
        return (
            <div>
                HP: {this.props.player.hp} / {this.props.player.maxHP}
                <br/>
                <br/>
                Str: {this.props.player.str}
                <br/>
                Dex: {this.props.player.dex}
                <br/>
                Int: {this.props.player.intel}
            </div>
        )
    }
    
}