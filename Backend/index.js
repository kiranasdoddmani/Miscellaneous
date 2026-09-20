const express=require("express");
const app=express();

const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
   let{username,password}=req.query;
   res.send(`Sending a GET response to ${username}`);
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {username,password}=req.body;
    res.send(`Sending a POST response ${username}`);
})

app.listen(port,()=>{
    console.log(`app listening Port${port}`);
})