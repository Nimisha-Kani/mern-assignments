import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Loading from './loading';
import './author.css'

import {AuthorService} from '../services/author-service';

const Component = ()=>{
    const [authors,setAuthors]=useState([]);
    useEffect(()=>{
        AuthorService.instance.getAllAuthor().then(setAuthors);     
       });

    if(authors.length===0){
        return <Loading text="Loading Authors"/>
    }



    return (
        <div className="author-list">
            <h2>Authors</h2>
            <ul className="author">
            {
                
                authors.map((author)=>(
                    
                        
                            <li key={author.id}>
                                <img key={author.id} src={author.photo} alt={author.name}/>

                                <h5>{author.name}</h5>
                            </li>
                        
                    
                ))
               
            }
            </ul>    
        </div>
    )
}

export default Component;