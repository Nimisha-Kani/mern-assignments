import * as ActionNames from './action-names';

export const statusReducer = (initialState={type:ActionNames.STATUS_IDLE}, action)=>{

    switch(action.type){

        case ActionNames.STATUS_SUCCESS:
        case ActionNames.STATUS_WAIT:
            return {type:action.type};

        case ActionNames.STATUS_ERROR:
            return {type:action.type, error:action.payload};
        default:
            return initialState;
    }

}