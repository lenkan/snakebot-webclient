import React from 'react'
import TournamentStore from '../../stores/TournamentStore'
import StoreWatch from '../../watch/StoreWatch'
import {ButtonInput, Grid} from 'react-bootstrap'
import CreateTournamentForm from './../forms/CreateTournamentForm'
import ConfigureTournamentForm from './../forms/ConfigureTournamentForm'

function getActiveTournament() {
    let tournament = TournamentStore.getActiveTournament();
    return {tournament: tournament}
}

const innerButton = (
    <ButtonInput value="Create Tournament" onClick={() => alert("hello")}/>
);

class Settings extends React.Component {
    constructor(props) {
        super(props);
        TournamentStore.initWS();
    }

    componentWillReceiveProps(nextProps) {

        // if (nextProps.tournament) {
        //     this.setState({
        //         tournamentName: nextProps.tournament
        //     })
        // }
    };

    render() {
        let table;
        if (!this.props.tournament.tournamentName) {
            table = <CreateTournamentForm />
        }
        else {
            table = <ConfigureTournamentForm tournamentName={this.props.tournament.tournamentName}/>
        }

        return (
            <Grid fluid>
                {table}
            </Grid >
        )
    }
}

export default StoreWatch(Settings, getActiveTournament);