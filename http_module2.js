const http= require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('hello world!')
    }else{
        res.writeHead(404)
        res.end('use the right url')
    }
})

server.listen(8000,()=>{
    console.log('server got started')
})
