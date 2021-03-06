import React from 'react';
import {connect} from 'react-redux';
import StartForm from '../components/StartForm';
import GameStarted from '../components/GameStarted';
import GameEnded from '../components/GameEnded';

export class MainNavigation extends React.Component  {

    render() {

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
    score: state.currentGame.score,
    highscore: state.highscore.player.highscore,
    currentQuestionIndex: state.currentGame.currentQuestionIndex,
    name: state.player.name,
    gameStarted: state.currentGame.gameStarted
});

export default connect(mapStateToProps, null)(MainNavigation);
