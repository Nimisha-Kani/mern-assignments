import React from 'react';

const component=(props)=>{
    return(
        <div>            
            <h2>{props.hour}:{props.minutes}:{props.second}</h2>
        </div>
    );
}

export default component;