const express=require("express");
const path=requie("path");

const app=express();

const port =3000;

app.set("view engine","ejs");
app.set("views",path)
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
 
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})