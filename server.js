 

const express=require('express')

const app=express()

const SERVER_PORT=process.env.PORT || 4334

app.use('/public',express.static(__dirname +'/public'))

app.get('/',(req,res)=>{
    res.send('Currently this is from backend')
})

app.listen(SERVER_PORT,()=>{
    console.log('Server started on http://localhost:4334')
})