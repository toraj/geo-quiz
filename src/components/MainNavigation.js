import React from 'react';
import {connect} from 'react-redux';

export class MainNavigation extends React.Component  {

    render() {
        console.log('props', this.props);
        return (
        <div className="mainnavigation">
            score: {this.props.score}
            highscore: {this.props.highscore}
        </div>
        )   
    }    
}

const mapStateToProps = (state) => ({
    score: state.highscore.currentGame.score,
    highscore: state.highscore.player.highscore,
    currentQuestionIndex: state.currentQuestionIndex
});

export default connect(mapStateToProps, null)(MainNavigation);
