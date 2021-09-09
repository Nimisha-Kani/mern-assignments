import React from 'react'
import AppHeader from './app-header';
import Game from './tictactoe-game';



class component extends React.Component{
    constructor(){
        super();
        this.state = {
            played: 0,
            x_win:0,
            o_win:0,
            tie:0
        }
    }
    handleGameOver=(won_x,won_o,tie)=>{
        if(won_x)
            this.setState({x_win:this.state.x_win+1})
        if(won_o)
            this.setState({o_win:this.state.o_win+1})
        if(tie)
            this.setState({tie:this.state.tie+1})
        this.setState({played:this.state.played+1})

    }
    render(){
        return(
            <div>
                <AppHeader title="Tic Tac Toe"/>      
                <table className="table">
                    <thead>
                        <th>Game played</th>
                        <th>X won</th>
                        <th>O won</th>
                        <th>Draw</th>
                    </thead>
                    <tbody>
                        <td>{this.state.played}</td>
                        <td>{this.state.x_win}</td>
                        <td>{this.state.o_win}</td>
                        <td>{this.state.tie}</td>
                    </tbody>

                </table>       
                <Game content = {this.handleGameOver}/>        
            </div>
        )
    }
} 

// const component=(props)=>{

//     return (
//         <div>
//             <AppHeader title="Tic Tac Toe"/>
//             <Game/>
//         </div>
//     );

// }


export default component;