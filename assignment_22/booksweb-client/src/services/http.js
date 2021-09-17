import axios from 'axios';



const getInstance = ()=>{

  let userStr= localStorage.getItem("user");
  let user=null;
  if(userStr){
    try{
      user=JSON.parse(userStr);

    }catch{}
  };

  let authorization= user? `BEARER ${user.token}` : '';
  //console.log('authorization', authorization);

  return axios.create({
    baseURL: 'http://localhost:5000/api/', 
    mode: 'no-cors',   
    headers: {
       
        //'Access-Control-Allow-Origin': '*',   
        "x-api-key":"LET ME PASS",
        "authorization": authorization,
        "Content-Type":"application/json",  
    } 
  });


} 

export default getInstance;