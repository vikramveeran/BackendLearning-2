import express from "express"

const app = express()
const port =8000

// app.[http method]("route",callback) 
app.get("/",(req,res)=>{
     res.send("hello")
})

app.get("/about",((req,res)=>{
     res.send("about")
}))

app.listen(port,()=>{
      console.log(`server is started at ${port}`);
})  

