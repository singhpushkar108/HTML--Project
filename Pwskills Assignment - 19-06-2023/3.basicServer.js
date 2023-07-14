const express=require('express');
const port=3050;
const app=express();

app.get("/",(req,res)=>{
   res.json({msg:'i am homepage'}) 
});

app.get("/about",(req,res)=>{
   res.json({msg:'i am about page'}) 
});

app.get("/contact",(req,res)=>{
   res.json({email:'support@pwskills.com'}) 
});

app.listen(port,()=>{
    console.log(`Serer running at ${port}`);
});
