import React, {useState,useEffect}from 'react';
import "./author.css";
import {withRouter} from 'react-router-dom';
import {AuthorService} from '../services/author-service';
import Loading from './loading';
import NotFound from './not-found';

const Component = (props)=>{
    console.log("propss",props)
    const [author,setAuthor]=useState(null,props);
    const id=props.match.params.id;
    console.log("inside author details  ",id);
    useEffect(()=>{
        
        
        AuthorService.instance.getAuthorById(id).then((author)=>{
            console.log(`got for ${id}: ${author}`);
            setAuthor(author);
        });        
    },[props.match.params.id]);

    if(author===null){
        return <Loading title={`searching for ${id}`} />
    }

    if(author===undefined){
        return <NotFound message={`Sorry no author with id : ${id} present in our record`}/>
    }
    
    return(
        <div className ="author-details">
            <h2>{author.name}</h2>
            
            <div className="authorInfo">
                <img width="300px" height="400px" src={author.photo} />
                <div className="info">
                    <h3>Author Id: {author.id}</h3>
                    <h3>Biography: {author.biography}</h3>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Component);

