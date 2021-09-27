const { request, response } = require('express');
const express = require('express');

const getRouter = ()=>{
    let router = express.Router();
    router
        .route("/")
        .get((request,response)=>{
            console.log("Inside users page");
            response.send("Inside User Page");

        });

    router
        .route("/registration")
        .get((request,response)=>{
            response.send("GET User Registration Page");
        })
        .post((request,response)=>{
            response.send("Add new user");
        })


    router
        .route("/login")
        .get((request,response)=>{
            response.send("GET login Page");
        })
        
        
    return router;
}

module.exports = getRouter;