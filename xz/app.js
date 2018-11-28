const express=require('express')
const mysql=require('mysql')
const bodyParse=require('body-parser')
//引入路由器
const userRouter=require('./routes/user.js')
const productRouter=require('./routes/product.js')
var server=express()
server.listen(3000)
//托管静态资源到public目录下
server.use(express.static('public'))
//使用parser中间件将post请求数据解析为对象
server.use(bodyParse.urlencoded({
	extended:false
}))
//把用户路由器挂载到/user下
server.use('/user',userRouter)
server.use('/product',productRouter)