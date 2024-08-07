const express=require('express');
const server=express();
const mongoose =require('mongoose');
const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const authorRouter = require('./routes/AuthorNames');
const categoryRouter = require('./routes/Categorys');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
// const cartRouter = require('./routes/Carts');


const cors =require('cors')

// middewares
server.use(express.json());
server.use(cors())
server.use('/Products',productsRouter.router);
server.use('/authorName', authorRouter.router);
server.use('/category', categoryRouter.router);
server.use('/users', usersRouter.router);
server.use('/auth', authRouter.router);
// server.use('/cart', cartRouter.router);


main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/PKBooksShop');
    console.log("database connceted ")
     

}

server.get('/',(req,res)=>{
    res.json({status:'success hoye gese bro'})
})


server.listen(8080,()=>{
    console.log('server started')
})