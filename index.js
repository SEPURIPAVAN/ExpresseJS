const express=require("express");
const app=express();

            const path=require("path"); //so your writing this 2 lines of code, 1

const port =3000;

app.set("view engine","ejs");

            app.set("views",path.join(__dirname,"/views")) //2

app.get("/",(req,res)=>{
    res.render("home.ejs");  //this dosent work if u run code through the parent dir
})

            app.get("/home",(req,res)=>{
                res.send("hello");
            })
 
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})