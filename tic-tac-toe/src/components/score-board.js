import React from "react";

const displayTable=()=>{
    console.log(this.state.scores,"inside display table scoresss");
    return(
        this.state.scores.map((ele,i)=>{
            console.log(ele,"elemet")
            return (
                <tr>
                    
                    <td>{ele[0]}</td>
                    <td>{ele[1]}</td>
                    <td>{ele[2]}</td>
                </tr>
            )
        })
    )


}
const component=({scores})=>{
    console.log("inside score board",scores);
    return(
    <div>
        <table id = "tabeId">
                                <tr>
                                    <th>Move</th>
                                    <th>Player</th>
                                    <th>Position</th>
                                </tr>
                                
                                <tbody>
                                    {displayTable}
                                </tbody> 
        </table>

        </div>
    )
}
export default component;