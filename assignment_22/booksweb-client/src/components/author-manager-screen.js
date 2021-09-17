import React,{useEffect} from 'react';
import AuthorEditor from './author-editor';
import { useSelector, useDispatch } from 'react-redux';
import {getAllAuthors,selectAuthor} from '../store/author-action';
import If from './if';
import Loading from './loading';

const AuthorList = ({ onAuthorSelect }) => {

    const authors = useSelector(state => state.authors);
    const selectedAuthor=useSelector(state => state.selectedAuthor);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(authors.length===0){
            getAllAuthors(dispatch);    
        }
    },[]);


    const loadAuthors=()=>{
        getAllAuthors(dispatch);
    }



    const handleSelectAuthor=(author)=>{
        selectAuthor(dispatch,author);
    }

    const selectClassName=(author)=>{
        let className="list-group-item list-group-item-action";
        if(author===selectedAuthor)
            className+=" active";

        return className;
    }

    return (
        <div className="list-group" >
            <If condition={authors.length===0}>
                {/* <button onClick={loadAuthors}>Load Authors</button> */}
                <Loading compact/>
            </If>
            {
                authors.map(author => (
                    <button type="button" key={author.id} onClick={()=>handleSelectAuthor(author)} className={selectClassName(author)}>
                        {author.name}
                    </button>
                ))
            }

        </div >
    );

};



const AuthorManagerScreen = (props) => {



    return (<div className="author-manager">
        <h2>Author Manager</h2>
        <div className='row author-manager'>
            <div className='col col-4 author-list'>
                <AuthorList />
            </div>
            <div className='col col-8'>
                <AuthorEditor />
            </div>
        </div>
    </div>);
};

export default AuthorManagerScreen;