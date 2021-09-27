import React from 'react'
import AppHeader from './app-header';
import Game from './tictactoe-game';
import ScoreBoard from './score-board';
import PlayerNameInput from './player-name-input';



const component=(props)=>{

    // const dummyScore={
    //     played:8,
    //     players:{
    //         O:{
    //             name:'Vivek',
    //             wins:3
    //         },
    //         X:{
    //             name:'Shivanshi',
    //             wins:2
    //         }
    //     }, 
    //     tie:3
    // };
    return (
        <div>
            <AppHeader title="Tic Tac Toe"/>
            <div className='row'>
                <div class='col col-6'><PlayerNameInput/></div>
                <div className='col col-6'><ScoreBoard /></div>
            </div>
            <Game/>        
            
        </div>
    );

}


export default component;