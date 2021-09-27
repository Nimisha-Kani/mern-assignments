import createStore from './index';
import * as ActionNames from './actions';


describe('score reducer tests',()=>{

    let store=null;
    
    beforeEach(()=>{
        store=createStore();
    });

    it('should represent empty score board at the start',()=>{

        const {score}=store.getState();
        //console.log('state',score);
        
        expect(score.played).toBe(0);
        expect(score.tie).toBe(0);
        expect(score.players.O.wins).toBe(0);
        expect(score.players.O.name).toBe('O');
        expect(score.players.X.name).toBe("X");
    });

    it('should increase tie and played for a tie game',()=>{

        store.subscribe(()=>{
            let {score}=store.getState();
            //console.log('score in tie',score);
            expect(score.played).toBe(1);
            expect(score.tie).toBe(1);
            expect(score.players.O.wins).toBe(0);
            expect(score.players.X.wins).toBe(0);
        });

        store.dispatch({type:ActionNames.GAME_TIE}); //updates will be sent to subscribe

    });

    it('should set the player name',()=>{

        const newName='Vivek';

        store.subscribe(()=>{
            const {score}= store.getState();
            console.log('score in setname',score);
            expect(score.players.O.name).toBe(newName);
        });
        store.dispatch({type:ActionNames.SET_PLAYER_NAME,payload:{player:'O',name:newName}});

    });

    it('should have no impact on score for non-related actions',()=>{

        //create a varialble initialScore and assign the extracted value of score
        let {score:initialScore}=store.getState();

        store.subscribe(()=>{
            let {score}=store.getState();
            console.log('score after the MOVE',score);
            expect(score).toBe(initialScore);
        });

        store.dispatch({type:ActionNames.MOVE,payload:0});
    });


});

