const http=require('http')


//visible on screen
const server=http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end("hello Students")
    }else{
        res.writeHead(404)
        res.end('use the right url')
    }
})

/**
 * server staring
 */
server.listen(3000,()=>{
    console.log("server got started")
    console.log('hello')
})

/**
  server got started
hello
 */
