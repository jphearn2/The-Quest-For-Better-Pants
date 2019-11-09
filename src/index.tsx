import React from "react"
import ReactDOM from "react-dom"
import KeyboardEvenHandler from "react-keyboard-event-handler"
import { Engine } from "./engine/MainEngine"
import { PlayerDisplay } from "./app/PlayerDisplay";

interface IState {
    keyPressed: string;
    engine: Engine;
}

class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        let e: Engine = new Engine();
        this.state = { keyPressed: "", engine: e }
    }

    render() {
        this.state.engine.setKeyIn(this.state.keyPressed)

        return (
            <>
                <div>
                    this is the game
                <KeyboardEvenHandler
                        handleKeys={['all']}
                        onKeyEvent={(key, e) => {
                            this.setState({ keyPressed: key })
                        }}
                    />
                    <br />
                    {this.state.engine.getState()}
                </div>
                <PlayerDisplay player={this.state.engine.getPlayerState()} />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));