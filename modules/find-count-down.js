 

function countDown(val){ 

    return new Promise( (resolve,reject) =>{    
        let res=val;  
    
        let iid = setInterval(()=>{
            if(val<0) 
                return reject(new Error(`Invalid number ${val}`));
            
            if(res>=0){
                console.log(res--);
            }
            else{
                return resolve();
            }
            
        },1000);
        
        
    });

}

countDown(5) 

.then ( ()=>{console.log('Done')}) 

.catch( error=>{console.log(error.message)}) 

console.log('count down started…'); 


