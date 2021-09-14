const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const getBookRouter = require('./routes/books-api-route');
const getOldBookRouter = require('./routes/books-api-route-old');
const getUserRouter = require('./routes/user-route');
const getAuthorRouter = require('./routes/author-route');
const cors = require('cors');


function configureCORS(app) {
    let api_key=null;
   
    //checks if request.header has api_key
    app.use((request,response,next)=>{
        console.log(request.headers);
        if(request.headers.api_key){
            api_key=request.headers.api_key;
            console.log('api_key',api_key);
        } else {
            console.log('no api_key in the header');
        }
        response.header("Access-Control-Allow-Headers", "*");        
        response.header("Access-Control-Allow-Method", "*");        
        next();
    });

    const allowedOrigin= origin =>{
        return api_key==="LET ME PASS";
    }

    var corsOptions = {
        origin: function (origin, callback) {
            if(allowedOrigin(origin))
                callback(null,true);
            else
                callback(new Error("NOT allowed by CORS"));
        }
    };



    app.use(cors(corsOptions));
    

}

function configureExpress(basePath) {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.static(path.join(basePath, 'public')));

    //Middleware to allow CORS
    // app.use((request,response,next) =>{
    //     //console.log('request.headers',request.headers);
    //     let apiKey=request.headers.api_key;
    //     if(true)  
    //         //allow whichever origin is making the request.
    //         response.setHeader("Access-Control-Allow-Origin",request.headers.origin);
    //     next();
    // });

    
    //configureCORS(app); 

    app.use(cors()); //allow all requests

    



    //console.log(getBookRouter);
    //console.log(getBookRouter());

    app.use('/api/v1/books', getOldBookRouter());
    app.use('/api/books', getBookRouter());
    app.use('/api/users', getUserRouter());
    app.use('/api/authors',getAuthorRouter());

    return app;
};

module.exports = {
    configureExpress
};