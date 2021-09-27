import React from 'react'

class __component extends React.Component {

    constructor(props){
        super(props);      
    }

    render() {       

        let data= this.props.content || "_";
        let style={
            //make '_' present but invisible.
            color: data==='_'?'transparent':'black'
        }
    
        return (
            <button style={style}  
                    className='cell'
                    onClick={()=>this.props.onCellClick(this.props.id)}
                    >{data}</button>
        );
    }
}




const _component=(props)=>{
    let cellData=props.content;
    let classes='cell ';
    const handleClick=()=>{
        if(cellData==='_'){
            cellData='X'
            console.log('changed cellData to ',cellData);
        }
    }

    return (
        <button onClick={handleClick} className={classes}>{cellData}</button>
    );

}

const component=(props)=>{

    let data= props.content || "_";
    
    let style={
        //make '_' present but invisible.
        color: data==='_'?'transparent':'black',
        cursor: data==='_'?'hand': 'not-allowed'
    }

    const onCellClick=()=>{
        if(!props.content)
            props.onCellClick(props.id); //allow click on empty cell only
    }

    return (
        <button style={style}  
                className='cell'
                onClick={onCellClick}
                >{data}</button>
    );
}



export default component;