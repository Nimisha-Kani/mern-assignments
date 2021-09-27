import React from 'react'
//import {connect} from 'react-redux';
import {useSelector} from 'react-redux';


//const Component=({moves})=>{
const Component=()=>{

    const moves=useSelector(s=>s.game.moves);
    

    return (
            <div className='gameMoves'>
                <h2>Moves</h2>
                <table className="table table-condensed table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Move</th>
                            <th>Player</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moves.map((move,index)=>(
                            <tr key={`${index+1}`}>
                                <td>{index+1}</td>
                                <td>{move.player}</td>
                                <td>{move.position}</td>
                            </tr>
                        ))};
                        
                    </tbody>
                </table>
            </div>
            );

};


// const mapStateToProps = ({game})=>{

//     return { 
//         moves:game.moves
//     };
// };

//export default connect(mapStateToProps)(Component);

export default Component; //using hooks