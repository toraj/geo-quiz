import React from 'react';
import {connect} from 'react-redux';
import StartForm from '../components/StartForm';

export class MainNavigation extends React.Component  {

    render() {
       
        return (
        <div className="mainnavigation">
            <div>score: {this.props.score}
            highscore: {this.props.highscore}
            </div>
            <StartForm></StartForm>
            name: {this.props.name}
        </div>
        )   
    }    
}

const mapStateToProps = (state) => ({
    score: state.highscore.currentGame.score,
    highscore: state.highscore.player.highscore,
    currentQuestionIndex: state.currentQuestionIndex,
    name: state.player.name
});

export default connect(mapStateToProps, null)(MainNavigation);
