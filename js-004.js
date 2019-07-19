var url  = require('url')
var http = require('http')
http.createServer((req,res)=>{
    // var equery = url.parse(req.url)
    // console.log(equery)
    var oldquery = url.parse(req.url).query
    console.log(oldquery)
    // url/parse(解析地址栏)如果传入第二个参数为true时，则会转换为对象，
    // var query = url.parse(req.url,true).query
    // 解析  把多段路径进行合并
    // var query = url.resolve('http://127.0.0.1:3000','/aa/bb')

    // var query = url.format({
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: "http://127.0.0.1",
    //     port: "3000",
    //     hostname: null,
    //     hash: null,
    //     search: '?name=li&pass=123',
    //     query: 'name=li&pass=123',
    //     pathname: '/',
    //     path: '/?name=li&pass=123',
    //     href: '/?name=li&pass=123'
    // })
    // console.log(query);
    
    res.end()

}).listen(3000)