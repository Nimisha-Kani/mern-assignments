import getHttp from './http';

export  class UserService{
    static instance=new UserService();

    _httpRequest=async(url,user)=>{
        
        let response=await getHttp().post(url,user);            
        localStorage.setItem("user",JSON.stringify(response.data));            
        return response.data
        


    }

    register= async(user)=>{        
        return await this._httpRequest("users",user);
    }

    login= async(loginUser)=>{
       return await this._httpRequest("users/login",loginUser);
        
    }

    logout=()=>{
        localStorage.removeItem("user");        
    }

    getUser=()=>{
        try{
            let userStr=localStorage.getItem("user");
            if(!userStr)
                return null;
            return JSON.parse(userStr);
        } catch(e){
            return null;
        }
    }
    
}