const { request, response } = require('express');
const express=require('express');
const {AuthorModel} =require('../models/author');

const getRouter=()=>{
    let router=express.Router();

    router
        .route('/')
        .get(async(request,response)=>{
            let authors=await AuthorModel.find();
            console.log(authors);
            response.json(authors);

        })

    return router;
};

module.exports = getRouter;
