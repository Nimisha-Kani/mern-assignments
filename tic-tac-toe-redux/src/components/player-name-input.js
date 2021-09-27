import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import * as ActionNames from '../store/actions';
const Component = () => {

    const [players, setPlayer] = useState({ O: 'O', X: 'X' });

    const dispatch=useDispatch();

    const handleChange = (e) => {
        let p = { ...players };
        p[e.target.name] = e.target.value;
        setPlayer(p);
    }

    const handleSave = () => {
        dispatch({type:ActionNames.SET_PLAYER_NAME,payload:{player:'O', name:players.O}})
        dispatch({type:ActionNames.SET_PLAYER_NAME,payload:{player:'X', name:players.X}})
    }   

    return (<div className="form-group player-names">
        <label>Player O</label>
        <input className="form-control" name="O" value={players.O} onChange={handleChange} />
        <label>Player X</label>
        <input className="form-control" name="X" value={players.X} onChange={handleChange} />
        <button onClick={handleSave} className="btn btn-primary">Save</button>
    </div>);


}


export default Component;