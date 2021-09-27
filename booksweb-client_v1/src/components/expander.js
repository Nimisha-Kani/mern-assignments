import React,{useEffect,useState} from 'react';
import If from './if';


const Component=(props)=>{
    const [readMore,setReadMore]=useState(false);
    console.log(props.short);
    
    
    const handleReadMore = ()=>{
        setReadMore(!readMore);
    }
    let str = readMore?props.content:props.content.slice(0,props.short);

    return(
        <div className="readMore">
            <span>
                <p>{str}
                {console.log(str.length,"length")}
                <If condition={!readMore}>
                    <a onClick={handleReadMore} href="#"> Show More...</a>
                </If>
                <If condition={readMore}>
                    <a onClick={handleReadMore} href="#"> Show Less...</a>
                </If>
                </p>
            </span>
        </div>
    )
}
export default Component;