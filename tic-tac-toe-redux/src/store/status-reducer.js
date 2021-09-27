import * as ActionNames from './actions';



export const statusReducer=(initialState='', action)=>{
    switch(action.type){

        case ActionNames.GAME_RESET:
        case ActionNames.APP_RESET:
            return "Next Move";

        case ActionNames.GAME_WON:
            return "Winner "+action.payload.winner;

        case ActionNames.GAME_TIE:
            return "Stalemate";

        default:
            return initialState;

        
    }
}