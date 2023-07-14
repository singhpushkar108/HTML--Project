const express=require('express');
const app=express();
const randomNumber = Math.random();
const port=3000;

app.get('/random',(req,res)=>{
    const randomNumber =Math.floor(Math.random()*100);
    res.json({
        random:randomNumber
    });
});

app.listen(port,()=>{
   console.log(`Server running at ${port}`); 
});