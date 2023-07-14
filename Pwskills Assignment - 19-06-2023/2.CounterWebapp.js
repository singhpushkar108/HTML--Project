const express=require("express");
const app=express();
const port=3000;
let count=0;

app.get('/',(req,res)=>{
    res.json({counter:count});
    
});

app.get('/increment',(req,res)=>{
    count=count+1;
    res.json({counter:count});
});

app.get('/decrement',(req,res)=>{
    count=count-1;
    res.json({counter:count});
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});