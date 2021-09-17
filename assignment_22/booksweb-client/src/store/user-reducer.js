
import * as ActionNames from './action-names'; 

export const userReducer=( user = null, action)=>{

    switch(action.type){
        case ActionNames.USER_LOGIN:
            return action.payload;
        
        case ActionNames.USER_LOGOUT:
            return null;

        default:
            return user;
    }
}


