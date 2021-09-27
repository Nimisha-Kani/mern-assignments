import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Component=({rating,max})=>{

    if(!max) max=5;
    let iconWidth=18.2;
    
    const outerDiv={
    
        width:iconWidth*rating,
        padding:0, 
      //  border:"1px solid red",
        overflow:"hidden"
        

    };

    const innerDiv={
        color:'orange',
        padding:0, 
        margin:0, 
       // border:"1px solid blue",
        width: iconWidth*max,
        
        
    };


    let stars=[];
    for(let i=1;i<=max;i++) stars.push(i);

    return (
        <div style={outerDiv}  title={`${rating} of ${max}`} >
           <div  style={innerDiv}>
                {stars.map(star=><FontAwesomeIcon icon={faStar}/>)}
            </div> 
        </div>
    )

}

export default Component;