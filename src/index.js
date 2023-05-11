const express = require ('express');
const config = require('./config');

const app = express();

app.get('/',(req,res)=>{
    res.send('Home');
});

app.listen(config.PPORT,()=>console.log(`port ${config.PORT}...`));