const http=require("http");
const url=require("url");
http.createServer((req,res)=>{
  var weather="sun -4~8 from dongdong";
  //http://localhost:8000/?callback=doit
  req.query=url.parse(req.url,true).query;
  //将req.url转化为对象结构, true将查询字符串也转为对象{ query:{callback:doit} }
  //获得了客户端发来的函数名
  var callback=req.query.callback;
  /*res.writeHead(200,{//添加响应头
    //允许来自任何客户端的地址发来的请求
    "Access-Control-Allow-Origin":"*"
  });*/
  res.write(`${callback}('${weather}')`);
  //doit('sun -4~8 from dongdong')
  setTimeout(function(){
    res.end();
  },5000)
}).listen(8000);