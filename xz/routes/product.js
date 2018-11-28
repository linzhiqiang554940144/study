
const express=require('express')
const mysql=require('mysql')
//引入连接池
const pool=require('../pool.js')
//创建空路由器
const router=express.Router()
//创建路由
//1.商品列表
router.get('/list',(req,res)=>{
	var obj=req.query
	$pno=parseInt(obj.pno)
	$count=parseInt(obj.count)
	if(!$pno){
		pno=1
	}
	if(!$count){
		$count=5
	}
	var start=($pno-1)*$count
	pool.query('select * from xz_laptop limit ?,?',[start,$count],(err,result)=>{
	if(err)throw err;
	res.send(result);
	})
})

//2.商品详情
router.get('/detail',(req,res)=>{
	var obj=req.query
	$lid=obj.lid
	if(!$lid){
		res.send({code:401,msg:"lid require"})
		return
	}
	pool.query('select * from xz_laptop where lid=?',[$lid],(err,result)=>{
		if(err)throw err;
		res.send(result)
	})
})

//3.删除商品
router.get('/delete',(req,res)=>{
	var obj=req.query
	$lid=obj.lid
	if(!$lid){
	res.send({code:401,msg:'lid require'})
		return;
	}
	pool.query('delete from xz_laptop where lid=?',[$lid],(err,result)=>{
		if(err)throw err
		if(result.affectedRows>0){
			res.send({code:200,msg:'delete suc'})
		}
	})
})
//4.插入商品
router.post('/add',(req,res)=>{
	var obj=req.body
	var i=1
	for(var k in obj){
		if(!obj[k]){
		res.send(`{code:${400+i},msg:'$[k]require'}`)
		return
		}
		i++
	}
	pool.query('insert into xz_laptop set ?',[obj],(err,result)=>{
		if(err)throw err
		if(result.affectedRows>0){
			res.send({code:200,msg:'insert suc'})
		}
	})
})
//5.商品更改
router.post('/update',(req,res)=>{
	var obj=req.body
	var i=400
	for(var k in obj){
		i++
		if(!obj[k]){
		res.send({code:i,msg:k+'require'})
		return
		}
	}
	pool.query('update xz_laptop set ?',[obj],(err,result)=>{
	if(err)throw err
	if(result.affectedRows>0){
			res.send({code:200,msg:'update suc'})
		}
	})
})


//导出路由器
module.exports=router