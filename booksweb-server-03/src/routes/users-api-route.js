const { request, response } = require('express');
const express=require('express');
const {UserModel} =require('../models/user');

const getRouter=()=>{
    let router=express.Router();
    router
        .route('/')
        .get(async(request,response)=>{
            let users=await UserModel.find();
            response.json(users);
        })

    router
        .route('/registration')
        .post(async(request,response)=>{
            try{
                let userData=request.body;
                let user= new UserModel(userData);
                let result=await user.save();
                response.status(201).json(result);
            } catch(err){
                response.status(400).json({error:err, message:err.message});
            }
        })

    router
        .route('/login')
        .post(async(request,response)=>{
            try{
                let loginData = request.body;
                console.log(loginData.email);
                let user = await UserModel.findOne({email:loginData.email,password:loginData.password});
                if(user)
                    response.json(user);
                else
                    response.status(404).json({error: 'User not found'});
            }catch(err){
                response.status(400).json({error:err, message:err.message});
            }
        })
    return router;
};


module.exports=getRouter;

