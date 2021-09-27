import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import Counter from './counter';
import Clock from './clock-component';

const component=(props)=>{

    return (
        <div>
            <Clock/>
            <StatusMessage message="Next Move 'O'"/>
            <TicTacToeBoard/>

            <button>Reset</button>
        </div>
    );

}


export default component;