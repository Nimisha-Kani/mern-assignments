import React,{useEffect} from 'react';
import AuthorEditor from './author-editor';
import { useSelector, useDispatch } from 'react-redux';
import {selectAuthor} from '../store/author-action';
import If from './if';
import Loading from './loading';
import * as ActionNames from '../store/action-names';

const AuthorList = () => {

    //get values from redux store
    const authors = useSelector(state => state.authors);
    const selectedAuthor=useSelector(state => state.selectedAuthor);
    const dispatch=useDispatch();

    const handleSelectAuthor=(author)=>{
        //selectAuthor(dispatch,author);

        dispatch(selectAuthor(author));

        //dispatch({type:ActionNames.AUTHOR_SELECT, payload:author});
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
                    <button type="button" key={author.id} 
                    onClick={()=>handleSelectAuthor(author)} className={selectClassName(author)}>
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