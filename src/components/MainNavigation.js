import React from 'react';
import {connect} from 'react-redux';
import StartForm from '../components/StartForm';
import Map from '../components/map';
import GameEnded from '../components/GameEnded';

export class MainNavigation extends React.Component  {

    render() {
       console.log(this.props);
        return (
        <div className="mainnavigation">
            <div className="scoreContainer"><div className="scorePart">score: {this.props.score}</div>
            <div>highscore: {this.props.highscore}</div>
            </div>
            {!this.props.gameStarted && this.props.currentQuestionIndex < 9 ? <StartForm></StartForm> : null}
            {this.props.gameStarted && this.props.currentQuestionIndex < 9 ? <GameStarted></GameStarted> : null}
            {this.props.gameStarted && this.props.currentQuestionIndex >= 9 ? <GameEnded></GameEnded> : null}
            name: {this.props.name}
        </div>
        )   
    }    
}

const mapStateToProps = (state) => ({
    score: state.highscore.currentGame.score,
    highscore: state.highscore.player.highscore,
    currentQuestionIndex: state.currentGame.currentQuestionIndex,
    name: state.player.name,
    gameStarted: state.currentGame.gameStarted
});

export default connect(mapStateToProps, null)(MainNavigation);
