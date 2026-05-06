import http from "http"

const server = http.createServer((req,res)=>{
          res.end("hello this is my first server")
})

server.listen(8000)