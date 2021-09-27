import React from 'react'
import Cell from './tictactoe-cell';



const Component = () => {

    const cells=[0,1,2,3,4,5,6,7,8];
    return (
        <div className="board">            
            {
                cells.map( (id)=>  <Cell key={id} id={id}  />)
            }
        </div>
    );
}


export default Component;