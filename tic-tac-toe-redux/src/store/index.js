
import {gameReducer} from './game-reducer';
import {statusReducer} from './status-reducer';
import {scoreReducer} from './score-reducer';
import {createStore,combineReducers} from 'redux';


const defineReducers= () =>{

    return combineReducers({
        game:gameReducer,
        status:statusReducer,
        score:scoreReducer,
    });
}



export default () =>  createStore(defineReducers());
