import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import MoveList from './move-list';
import ResetButton from './game-reset';

class Component extends React.Component {

   

    render() {
        console.log('this.state', this.state);

        return (
            <div>
                <ResetButton/>
                <StatusMessage />
                <div className='row'>
                    <div className='col col-6'><TicTacToeBoard /></div>
                    <div className='col col-6'><MoveList /></div>
                </div>

                
            </div>
        );
    }
}



export default Component;