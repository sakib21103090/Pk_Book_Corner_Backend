const express=require('express');
const server=express();


server.get('/',(req,res)=>{
    res.json({status:'success hoye gese bro'})
})

server.listen(8080,()=>{
    console.log('server started')
})