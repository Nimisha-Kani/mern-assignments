const express=require('express');
const reviewService=require('../services/review-service');
const {handleRequest}=require('../utils/express-utils');


const getRouter = ()=>{
    let router=express.Router();

    router
        .route('/')
        .get(handleRequest(reviewService.getAllReviews))
        .post(handleRequest(reviewService.addReview))
   
    
    return router
}

module.exports=getRouter;