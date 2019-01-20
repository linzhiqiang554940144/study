const http=require("http")
const url=require("url")
http.createServer((req,res)=>{
    //每收到一次请求，就自动执行回调函数
    //req是封装请求信息的对象
    req.url=url.parse(req.url,true)
    var fun=req.url.query.callback
    var weater="hello worldsad"
    res.write(`${fun}('${weater}')`)
    res.end()
}).listen(3000,function(){
    console.log("服务端已启动，监听3000端口")
})