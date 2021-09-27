import * as ActionNames from './actions';


const createNewGame = () => ({
    cells:[null, null, null, null, null,null, null, null, null],
    player: 'O',  //O, X or null for stalemate
    moves:[],   //list of moves made so far
    winningCombo: null,
    winner: null
});

const game=createNewGame();

export const gameReducer = (initialState = game, action) => {
    let newState = {
        ...initialState,
        cells: [...initialState.cells],
        moves: [...initialState.moves]
    }

    switch (action.type) {
        case ActionNames.MOVE:  //{payload: position} --> where is move made
            let pos = action.payload;
            if (initialState.cells[pos])
                return initialState; //I am not making a change

            newState.cells[pos] = initialState.player;
            newState.moves.push({ player: initialState.player, position: action.payload });
            newState.player = newState.player === 'O' ? 'X' : 'O';

            return newState;

        case ActionNames.GAME_WON:
            newState.winningCombo = action.payload.winningCombo;
            newState.winner = action.payload.winner;
            newState.player=null;
            return newState;

        case ActionNames.GAME_TIE:
            newState.player = null;
            newState.player=null;
            return newState;

        case ActionNames.APP_RESET:
        case ActionNames.GAME_RESET:
            return createNewGame();

        default:
            return initialState;
    }

    
}