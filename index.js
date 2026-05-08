import express from "express"

const app = express()
const port =8000

app.use(express.json())
// app.[http method]("route",callback) 
// app.get("/",(req,res)=>{
//      res.send("hello")
// })

// app.get("/about",((req,res)=>{
//      res.send("about")
// }))

// app.post("/",(req,res)=>{ 
//      let body = req.body;
//      console.log(body);
//      res.send("hello");
// })

let users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "city": "Bengaluru"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "email": "bob@example.com",
    "city": "Mumbai"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie@example.com",
    "city": "Delhi"
  },
  {
    "id": 4,
    "name": "Diana Lee",
    "email": "diana@example.com",
    "city": "Hyderabad"
  },
  {
    "id": 5,
    "name": "Ethan Clark",
    "email": "ethan@example.com",
    "city": "Chennai"
  }
]


app.get("/user",(req,res)=>{ 
     res.send(users)
})

app.listen(port,()=>{
      console.log(`server is started at ${port}`);
})  

