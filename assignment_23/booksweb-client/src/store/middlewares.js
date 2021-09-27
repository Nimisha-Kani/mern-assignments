import * as ActionNames from './action-names';
import {logout} from './user-actions';


export const logger=(...actionTypes)=>{

    return (store)=>{

        return next =>{

            return action=>{
                console.log('ALL ACTION',action);
                if(actionTypes.find(action.type))
                    console.log('LOGGED ACTION',action);
                next(action);


            }

        }

    }

}


// export const logger =(...actionTypes) => store => next => action => {

    
    
// };


export const handleInvalidLogins = store=>next=>action=>{

    if(action.type===ActionNames.STATUS_ERROR){
        const status=action.payload?.error?.response?.status;
        if(status===401 || status === 403){
            store.dispatch({type:ActionNames.USER_LOGOUT});            
        }
    }
    next(action);
}

export const handlePromise= store=> next=> action =>{

    if(action instanceof Promise){
        store.dispatch({type:ActionNames.STATUS_WAIT});       
        action
            .then( newAction => {
                store.dispatch({type:ActionNames.STATUS_SUCCESS});
                store.dispatch(newAction);
            })
            .catch(error=>{
                store.dispatch({type:ActionNames.STATUS_ERROR, payload:error});
            });

        //we will not send current action to next() as it will cause error


    } else{
        next(action); //go and handle using standard process
    }

}