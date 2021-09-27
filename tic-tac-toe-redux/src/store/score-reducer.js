import * as ActionNames from './actions';


const getNewScoreBoard = () => ({

        played: 0,
        players: {
            O: {
                name: "O",
                wins: 0
            },
            X: {
                name: "X",
                wins: 0
            }
        },

        tie: 0
    });

const scoreBoard=getNewScoreBoard();

export const scoreReducer=(initialState=scoreBoard,action)=>{

    let newState={
            ...initialState
        };
    newState.players={
        O: {...initialState.players.O},
        X: {...initialState.players.X}
    }

    switch(action.type){
        case ActionNames.GAME_WON:
            newState.players[action.payload.winner].wins++;
            newState.played++;
            return newState;

        
        case ActionNames.GAME_TIE:
            newState.played++;
            newState.tie++;
            return newState;

        case ActionNames.SET_PLAYER_NAME: 
            //action.payload-->{player:'O',name:'Vivek' }
            newState.players[action.payload.player].name=action.payload.name;
            return newState;

        
            

        case ActionNames.APP_RESET:
            return getNewScoreBoard();
        default:
            return initialState;
    }
};



