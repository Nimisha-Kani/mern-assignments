import * as ActionNames from './action-names';

import {AuthorService} from '../services/author-service';


export const getAllAuthors=async()=>{
    let authors=await AuthorService.instance.getAllAuthors();
    return {type:ActionNames.AUTHOR_LIST, payload:authors};
}

export const updateAuthor=async(dispatch,author)=>{

    let result=await AuthorService.instance.updateAuthor(author);
    return {type:ActionNames.AUTHOR_UPDATE, payload:result};

}


export const addAuthor=async(dispatch,author)=>{
    let result=await AuthorService.instance.addAuthor(author);
    return {type:ActionNames.AUTHOR_ADD, payload:result};
}

export const selectAuthor=(dispatch,author)=>{
    dispatch({type:ActionNames.AUTHOR_SELECT, payload:author});
}