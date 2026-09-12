const express=require('express');const path=require('path');
const app=express();app.use(express.json());app.use(express.static(__dirname));
const products=[
{id:1,title:'Midnight Satin Set',creator:'Luna V.',category:'Fehérnemű',price:49.9,stock:3,verified:true,emoji:'✦'},
{id:2,title:'After Hours Hoodie',creator:'Mia Rose',category:'Ruhák',price:64.0,stock:7,verified:true,emoji:'◒'},
{id:3,title:'Signature Lace Top',creator:'Nika S.',category:'Fehérnemű',price:39.0,stock:5,verified:true,emoji:'◇'},
{id:4,title:'Limited Weekend Drop',creator:'Luna V.',category:'Kiegészítők',price:29.0,stock:12,verified:true,emoji:'✹'},
{id:5,title:'Creator Signed Tee',creator:'Mia Rose',category:'Ruhák',price:44.0,stock:8,verified:true,emoji:'✧'},
{id:6,title:'Velvet Accessory Box',creator:'Nika S.',category:'Kiegészítők',price:55.0,stock:4,verified:true,emoji:'◆'}];
app.get('/api/products',(req,res)=>res.json(products));
app.get('/api/health',(req,res)=>res.json({ok:true,service:'VelvetDrop API'}));
app.post('/api/orders',(req,res)=>{const {items,email}=req.body;if(!Array.isArray(items)||!email)return res.status(400).json({error:'Hiányzó adatok'});res.status(201).json({orderId:'VD-'+Date.now().toString(36).toUpperCase(),status:'paid_demo',message:'Demo rendelés létrehozva'});});
app.post('/api/creators',(req,res)=>res.status(201).json({id:Date.now(),status:'pending_verification',...req.body}));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'index.html')));
app.listen(process.env.PORT||3000,()=>console.log('VelvetDrop running on http://localhost:'+(process.env.PORT||3000)));
