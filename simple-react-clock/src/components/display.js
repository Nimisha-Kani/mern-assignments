import React from 'react';

const component=(props)=>{
    return(
        <div>            
            <h2>{props.hour}:{props.minutes}:{props.seconds}</h2>
        </div>
    );
}

export default component;