import Game from './game';
import * as ActionNames from '../store/actions';


let game=new Game();


export const move= (dispatch,id)=>{

    if(game.move(id)){
        dispatch({type: ActionNames.MOVE, payload:id});        
    }
    if(game.winner){
        dispatch({type:ActionNames.GAME_WON, payload:{winner:game.winner, winningCombo:game.winningCombo}});
    }
    if(game.isStalemate()){
        dispatch({type:ActionNames.GAME_TIE});
    }

}

export const resetGame=()=>{
    game=new Game();
    return {type:ActionNames.GAME_RESET};
};

const onCellClick=(id)=>{

    if(this.game.move(id)){

        this.setState({cells:[...this.game.cells]});

        if(this.game.winner){
            this.setState({status:`"${this.game.winner}" Wins`});
            this.setState({winner:this.game.winner, winningCombo:this.game.winningCombo});
            this.setState({moves:9});
            return ;
        }

        if(this.game.isStalemate()){
            this.setState({status:"Game is Stalemate"});
            return ;
        }

        this.setState({next: this.game.next});
        this.setState({moves:this.game.moves});

    }
}



