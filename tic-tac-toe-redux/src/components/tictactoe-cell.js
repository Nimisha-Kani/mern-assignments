import React from 'react';
import {connect} from 'react-redux';
import {move} from '../service/game-controller';


const Component=(props)=>{

    const borders=[
        "br bb",
        "bl bb br",
        "bl bb",
        
        "bt br bb",
        "bl bt br bb",
        "bl bt bb",

        "bt br",
        "bl bt br",
        "bl bt"

    ]
    console.log("props.dispatch",props.dispatch);
    const player= props.cells[props.id];

    let winner=props.winningCombo;
    let data= player || "_";       

    const onCellClick=()=>{
        move(props.dispatch,props.id);
    }

    let iAmWinner=false;
    if(winner){
        const id=props.id;
        if(id===winner[0]||id===winner[1]||id===winner[2])
            iAmWinner=true;
    }

    let style={
        //make '_' present but invisible.
        color: data==='_'?'transparent':'black',
        cursor: data==='_' && !winner ?'hand': 'not-allowed',
        background: iAmWinner? 'lightgreen': 'white'
    }

    const className=`cell ${borders[props.id]}`;

    return (
        <button style={style}   className={className}
                onClick={onCellClick}  >{data}</button>
    );
}

const mapStateToProps = ({game})=>{

    return {
        cells:game.cells,
        winningCombo:game.winningCombo,
        player:game.player,
        winner:game.winner
    }
};

export default connect(mapStateToProps)(Component);