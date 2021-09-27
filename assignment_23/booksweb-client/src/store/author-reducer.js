import * as ActionNames from './action-names';

export const authorsReducer=(authors=[], action)=>{

    switch (action.type) {

        case ActionNames.AUTHOR_LIST:
            return action.payload;

        
        case ActionNames.AUTHOR_ADD:
            return [...authors, action.payload];

        case ActionNames.AUTHOR_UPDATE:
            console.log(action);
            return authors.map(a=> a.id===action.payload.id? action.payload:a); 


        case ActionNames.AUTHOR_DELETE:
            return authors.filter(a=>a.id!==action.payload.id);

        default:
            return authors;
    }
}

export const authorReducer=( author=null, action)=>{
    
    switch(action.type){

        case ActionNames.AUTHOR_UPDATE:
        case ActionNames.AUTHOR_SELECT:
        case ActionNames.AUTHOR_ADD:
            return action.payload;

        
            

        default:
            return author;
    }
}