import React from 'react';


const Component=({title,text,image,compact})=>{

    if(!image){
        image='/images/loading.gif';        
    }
    
    if(compact){
        return <img width="80" src={image} alt={text} />
    }

    
    if(!title){
        title="Please wait"
    }

    if(!text){
        text="loading your request...";
    }

    return (<div className='loading'>
        <h2>{title}</h2>
        
        <img src={image} alt={text} />
        <p>{text}</p>
    </div>);
}

export default Component;