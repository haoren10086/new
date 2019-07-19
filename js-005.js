var url = require('url');
var http = require('http');
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }

    var  data ={
        id:'222',
        pass:'222'

    }
    res.writeHead(200,{"Content-type":"text/html;charset:UTF8"})
    var Id = url.parse(req.url,true).query.id;
    var Pass = url.parse(req.url,true).query.pass;
    if(Id==data.id&&Pass==data.pass){
        res.end("ok")
    }else{
        res.end("no")
    }

   console.log(Id,Pass);
   
}).listen(3000,()=>{
    console.log("挂载成功")
})



