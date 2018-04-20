import React from  'react';
import Question from '../components/question';
import Map from '../components/map';

export default class GameStarted extends React.Component {
    render() {
        return (<div><Question question={'foo bar?'}/>
        <Map></Map>
        </div>)
    }
}