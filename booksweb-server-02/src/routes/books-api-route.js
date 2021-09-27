const express=require('express');


const getRouter= ()=>{

   // console.log('setting up the routes');
    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")     
        .get( (request,response)=>{
            console.log('inside book list route')
            response.send('GET book list');
        })
        .post((request,response)=>{
            response.send('Add new book');
        });


    router
    .route('/:id')
    .get( (request,response)=>{

        response.send('GET book by id:'+ request.params.id);
    })
    .put((request,response)=>{
        response.send('Update book by id:'+request.params.id);        
    })
    .delete((request,response)=>{
        response.send('DELETE book by id:'+request.params.id);        
    });

    return router;


};


module.exports=getRouter;

