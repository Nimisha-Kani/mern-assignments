import React from 'react'
import StatusMessage from './status-message';
import TicTacToeBoard from './tictactoe-board';
import Game from '../service/game';
import ScoreBoard from './score-board'


class component extends React.Component {

    constructor(props){
        super(props);
        this.game=new Game();
        
        this.state= {...this.game, status:'Next Move "O',score:[null,null,null],scores :[]};
    }

    getInitialState=()=>{
        return {
            cells:[  null,null,null,
                     null,null,null,
                     null,null,null
                ],
            next:'O',  
            winner:null,          
            status:'Next Move "O"',
            score:[null,null,null],
            scores:[]
        }
    }
    
    

    handleCellClick=(id)=>{
        

        if(this.game.move(id)){
            
            this.setState({cells:[...this.game.cells]});
            
            if(this.game.winner){
                this.setState({status:`"${this.game.winner}" Wins`});
                this.setState({winner:this.game.winner, winningCombo:this.game.winningCombo});
                this.setState({moves:9});
                if(this.game.winner==='O')
                    this.props.content(false,true,false)
                else
                    this.props.content(true,false,false)
                return ;
            }

            if(this.game.isStalemate()){
                this.setState({status:"Game is Stalemate"});
                this.props.content(false,false,true)
                return ;
            }

            this.setState({next: this.game.next});
            this.setState({moves:this.game.moves});
            
            console.log(this.game.moves,this.state.next,id,"totalmoves");
            let score = [this.game.moves,this.state.next,id];
            
            let scores = this.state.scores;
            scores.push(score);
            console.log('scoress',scores);
            this.setState({scores:[...scores]})
            this.setState({score:[...score]})
            console.log(this.state.scores);
            
            
        }


    }
    


    _handleCellClick=(id)=>{
        let next=this.state.next;

        //const cells= this.state.cells; //I am accessing current cells to modify

        const cells=[...this.state.cells]; //create a new array with old values
        cells[id]=next;  //change one cell in the new array
        this.setState({cells});
        
        let winner= this.game.check(cells);
        if(winner){
            this.setState({winner,status:`"${cells[winner[0]]}" Wins`,next:null});
            return ;
        }

        if(this.game.isStalemate(cells)){
            this.setState({status:`Game is stalemate`,next:null});
            return ;
        }

        //Game is Running currently
        next= next==='O'?'X':'O';  //get new value for next
        this.setState({next});
        this.setState({status:`Next Move: "${next}"`});

    }

    reset=()=>{
        //this.setState(this.getInitialState());
        this.game.reset();
        this.setState({...this.game, status:`Next Move : "O"`});
    }

    render(){
        console.log('this.state',this.state);
        
        return (
            <div>
                <StatusMessage message={this.state.status} moves={this.state.moves} />
               
               <div>

                <span className="game">
                    <TicTacToeBoard cells={this.state.cells} 
                                    winner={this.state.winner}
                                    winningCombo={this.state.winningCombo}
                                    onCellClick={this.handleCellClick}
                                    
                    />
                    
                    
                    <table className = "table table-striped table-compact table-hover">
                        <thead>
                            <tr>
                                <th>Move</th>
                                <th>Player</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            { this.state.scores.map((ele,i)=>
                                <tr>
                                    <td>{ele[0]}</td>
                                    <td>{ele[1]}</td>
                                    <td>{ele[2]}</td>
                                </tr>
                                )}
                                 
                        </tbody>
                            
                                                
                    </table>

                </span>
                </div>
                <button onClick={this.reset} >Reset</button>
            </div>
        );
    }
}

const _component=(props)=>{

    return (
        <div>
            <StatusMessage message="Next Move 'O'"/>
            
            <TicTacToeBoard/>
            <button>Reset</button>
        </div>
    );

}


export default component;