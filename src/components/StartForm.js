import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/gameaction'

export class StartForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    start(event) {
        event.preventDefault();
        this.props.startGame(this.state.name);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return(<div>
            <form>
                <label htmlFor="username">Enter your name:</label>
                <input value={this.state.name} onChange={(event) => { this.handleChange(event) }} name="name" />
                <button onClick={(event) => { this.start(event)} }>Start game</button>
            </form>
        </div>)
    }



}

const mapDispatchToProps = (dispatch) => ({
    startGame: (name) => {
        return dispatch(startGame(name))
    }
})

export default connect(null, mapDispatchToProps)(StartForm)