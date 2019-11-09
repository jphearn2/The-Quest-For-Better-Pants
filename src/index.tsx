import React from "react"
import ReactDOM from "react-dom"
import KeyboardEvenHandler from "react-keyboard-event-handler"
import { Engine } from "./engine/MainEngine"

interface IState {
    keyPressed: string;

}

class App extends React.Component <{}, IState> {
    private engine: Engine = new Engine();
    constructor(props: {}){
        super(props);
        this.state = { keyPressed: "" }
    }

    render(){
        this.engine.setStorage(this.state.keyPressed)

        return(
            <div>
                this is the game
                <KeyboardEvenHandler
                    handleKeys={['all']}
                    onKeyEvent={(key, e) => {
                        console.log(key);
                        this.setState({ keyPressed: key })
                    }}
                />
                <br/>
                {this.engine.getStorage()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));