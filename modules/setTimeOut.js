function delay_fun(val){
    return new Promise((resolve,reject)=>{
        let id =setTimeout(()=>{
            return resolve();
        },val)

    });
}



delay_fun(10000)
    .then(()=>console.log("Done"));
console.log("Please wait...")