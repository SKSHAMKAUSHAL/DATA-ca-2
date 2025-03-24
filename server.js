require('dotenv').config();
const {connect} = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const router=require('./routes')
const connectedToDb = require('./db');
const Db_url=process.env.DB_URL;
const Port =process.env.PORT;
app.use('/api',router);

app.get('/',(req,res)=>{
    res.send('hello this sksham kaushal')
})

app.listen(Port,async()=>{
    try{
connectedToDb(Db_url);
 console.log("connected");
console.log(`port is listining at http://localhost:${Port}`);
} catch(error){
    res.status(500).json({'error':error})
}
})