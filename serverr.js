const { request, response } = require("express");
const express=require("express");
const app=express();
app.listen(3000);

//routing
app.get('/',function(request,response){
    response.sendFile('C:\\Users\\Darshan\\Desktop\\RialtosTASK\\task.html')
})

app.use (function(request,response){
    response.status(404).sendFile('C:\\Users\\Darshan\\Desktop\\RialtosTASK\\404.html')
})
//1)we can run this file by using command =>  node serverr.js
//2)then going on chrome browser type => localhost:3000

