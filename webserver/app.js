const http = require('http');

const requstHandler = function (request,response){
    if(request.url === '/time')
        response.write(new Date().toLocaleTimeString());
    else{
        response.write("server started")
    }

    response.end()
}

const app = http.createServer(requstHandler);

const port = 5000;
const server = app.listen(port,()=>{
    console.log(`server started ${port}`)
})