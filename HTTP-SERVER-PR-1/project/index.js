const fs = require('fs')
const http=require("http")
// const {text}=require("stream/consumers")

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    if(req.url=="/"){
        fs.readFile("index.html","utf-8",(err,data)=>{
            if(err) {
                console.log("error reading");                
            }
            else{
                res.end(data);
                
            }
        })
    }
        else if(req.url=="/login"){
            res.end("Service load complete");
        }
        else if(req.url=="/signup"){
            res.end("Signup load complete");
        }
        else if(req.url=="/contact"){
            res.end("contact load complete");
        }
        else if(req.url=="/service"){
            res.end("Service load complete");
        }
    });
    server.listen(8090,()=>{
        console.log("Server is running on port 8090");
    });