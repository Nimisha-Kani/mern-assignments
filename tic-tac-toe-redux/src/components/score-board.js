import React from 'react';
import {connect} from 'react-redux';


const Component = (props) => {
    
    return (
        <div className="score-board">
            <table>
                <thead>
                    <tr>
                        <th>Played</th>
                        <th>{props.score.players.O.name} (O)</th>
                        <th>{props.score.players.X.name} (X)</th>
                        <th>Tie</th>
                    </tr>
                </thead>
                <tbody>
                {console.log("Score board", props)}
                    <tr>
                        <td>{props.score.played}</td>
                        <td>{props.score.players.O.wins}</td>
                        <td>{props.score.players.X.wins}</td>
                        <td>{props.score.tie}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

//returns what props are required by the current component
//from the redux
const mapReduxStateToProps = (reduxState) => {

    console.log('reduxState',reduxState);

    return { 
        score:reduxState.score,
    };
}

export default connect(mapReduxStateToProps)(Component);