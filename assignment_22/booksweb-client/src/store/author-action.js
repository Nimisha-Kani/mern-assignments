import * as ActionNames from './action-names';
import {delay} from '../utils/core';
import {AuthorService} from '../services/author-service';


export const getAllAuthors=async(dispatch)=>{

    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        //await delay(3000);
        let authors=await AuthorService.instance.getAllAuthors();
        dispatch({type:ActionNames.AUTHOR_LIST, payload:authors});
        dispatch({type:ActionNames.STATUS_SUCCESS});

    }catch(error){
        dispatch({type:ActionNames.STATUS_ERROR, payload:error});
    }

}

export const updateAuthor=async(dispatch,author)=>{
    
    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        //await delay(3000);
        let result=await AuthorService.instance.updateAuthor(author);
        dispatch({type:ActionNames.STATUS_SUCCESS});
        dispatch({type:ActionNames.AUTHOR_UPDATE, payload:result});

    }catch(error){
        dispatch({type:ActionNames.STATUS_ERROR, payload:error});
    }
}


export const addAuthor=async(dispatch,author)=>{

    
    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        //await delay(3000);
        let result=await AuthorService.instance.addAuthor(author);
        dispatch({type:ActionNames.STATUS_SUCCESS});
        dispatch({type:ActionNames.AUTHOR_ADD, payload:result});

    }catch(error){
        dispatch({type:ActionNames.STATUS_ERROR, payload:error});
    }


}

export const selectAuthor=(dispatch,author)=>{
    dispatch({type:ActionNames.AUTHOR_SELECT, payload:author});
}