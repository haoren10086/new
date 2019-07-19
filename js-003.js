var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/red'){
        fs.readFile('../js-01/red.html',(err,data)=>{
            res.end(data)
        })
    }else if(req.url=='/green'){
        fs.readFile('../js-01/green.html',(err,data)=>{
            res.end(data)
        })
    }
    
}).listen(3000)