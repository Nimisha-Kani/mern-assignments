import React from 'react';
import {connect} from 'react-redux';
import {resetGame} from '../service/game-controller';


const ResetButton=(props)=> (
                        <button onClick={props.resetGame} 
                                className="btn btn-danger">
                            Reset
                        </button>);



//Bind this action method with dispatch
const actions={
    resetGame   
}


export default connect(null, actions)(ResetButton);