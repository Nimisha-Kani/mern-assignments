import * as ActionNames from './action-names';
import {delay} from '../utils/core';
import {BookService} from '../services/book-service';


export const getAllBooks=async(dispatch)=>{

    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        //await delay(3000);
        let books=await BookService.instance.getAll();
        dispatch({type:ActionNames.BOOK_LIST, payload:books});
        dispatch({type:ActionNames.STATUS_SUCCESS});

    }catch(error){
        dispatch({type:ActionNames.STATUS_ERROR, payload:error});
    }

}

// export const updateBook=async(dispatch,book)=>{
    
//     try{
//         dispatch({type:ActionNames.STATUS_WAIT});
//         //await delay(3000);
//         let result=await BookService.instance.updateBook(book);
//         dispatch({type:ActionNames.STATUS_SUCCESS});
//         dispatch({type:ActionNames.BOOK_UPDATE, payload:result});

//     }catch(error){
//         dispatch({type:ActionNames.STATUS_ERROR, payload:error});
//     }
// }


export const addBook=async(dispatch,book)=>{

    
    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        //await delay(3000);
        let result=await BookService.instance.addBook(book);
        dispatch({type:ActionNames.STATUS_SUCCESS});
        dispatch({type:ActionNames.BOOK_ADD, payload:result});

    }catch(error){
        dispatch({type:ActionNames.STATUS_ERROR, payload:error});
    }


}

export const selectBook =(dispatch,book)=>{
    dispatch({type:ActionNames.BOOK_SELECT, payload:book});
}