import react from  'react';
import Question from '../components/question';

export default class GameStarted extends React.Component {
    render() {
        return (<div><Question question={'foo bar?'}/>
        <Map></Map>
        </div>)
    }
}