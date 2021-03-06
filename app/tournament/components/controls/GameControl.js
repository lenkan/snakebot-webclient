import React from "react";
import AppAction from "../../action/tournament-actions";
import StoreWatch from "../../watch/StoreWatch";
import TournamentStore from "../../../baseStore/BaseStore";
import ReactSliderNativeBootstrap from "react-bootstrap-native-slider";

function gameControlStateCallback() {
    let updateFrequency = TournamentStore.getUpdateFrequencyForTournament();
    let frameInfo = TournamentStore.getFrameInfo();
    return {updateFrequency, frameInfo}
}

class GameControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frequencyMinValue: 100,
            frequencyMaxValue: 2000,
            frequencyStep: 100,
            gameActive: false,
            gamePaused: false,
            gameRunning: false,
            updateFrequency: 500,
            currentFrame: 0,
            lastFrame: 0,
            firstFrame: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            gameActive: nextProps.gameActive,
            gamePaused: nextProps.gamePaused,
            gameRunning: nextProps.gameRunning,
            updateFrequency: nextProps.updateFrequency,
            currentFrame: nextProps.frameInfo.currentFrame,
            lastFrame: nextProps.frameInfo.lastFrame
        });
    }

    static updateFrequencyChanged(event) {
        AppAction.setUpdateFrequencyTournament(parseInt(event.target.value));
    }

    static currentFrameChanged(event) {
        AppAction.setCurrentFrameTournament(parseInt(event.target.value));
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Frame delay: {this.state.updateFrequency}</h4>
                    <ReactSliderNativeBootstrap value={this.state.updateFrequency}
                                                handleChange={GameControl.updateFrequencyChanged}
                                                step={this.state.frequencyStep} max={this.state.frequencyMaxValue}
                                                min={this.state.frequencyMinValue} disabled="disabled"/>
                </div>
                <div>
                    <h4>Frame: {this.state.currentFrame}</h4>
                    <ReactSliderNativeBootstrap value={this.state.currentFrame} handleChange={GameControl.currentFrameChanged}
                                                step={1} max={this.state.lastFrame} min={this.state.firstFrame}
                                                disabled="disabled"/>
                </div>
            </div>
        )
    }
}

export default StoreWatch(GameControl, gameControlStateCallback);
