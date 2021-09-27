import {UserService} from '../services/user-service';
import * as ActionNames from './action-names'; 
import {delay} from '../utils/core';


export const UserActionNames={
    Login:"ACTION_LOGIN",
    Logout:"ACTION_LOGOUT"    
};

export const login=async(dispatch, loginUser) =>{

    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        await delay(2000);
        let user= await UserService.instance.login(loginUser);
        dispatch({type:ActionNames.STATUS_SUCCESS});
        dispatch({type:ActionNames.USER_LOGIN, payload:user});

    } catch(error){
        dispatch({type:ActionNames.STATUS_ERROR,payload:error});
    }
}

export const register=async(dispatch,newUser)=>{
    try{
        dispatch({type:ActionNames.STATUS_WAIT});
        await delay(2000);
        let user= await UserService.instance.register(newUser);
        dispatch({type:ActionNames.STATUS_SUCCESS});
        dispatch({type:ActionNames.USER_LOGIN, payload:user});

    } catch(error){
        dispatch({type:ActionNames.STATUS_ERROR,payload:error});
    }
}

export const logout= (dispatch)=>{
    UserService.instance.logout();
    dispatch({type:ActionNames.USER_LOGOUT})
}

export const verifyUserLogin=(dispatch)=>{

    let user= UserService.instance.getUser();
    if(user)
        dispatch({type:ActionNames.USER_LOGIN,payload:user});
    else
        dispatch({type:ActionNames.USER_LOGOUT});
}