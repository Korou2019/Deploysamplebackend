 

const express=require('express')

const app=express()


app.use('/public',express.static(__dirname +'/public'))

app.get('/',(req,res)=>{
    res.send('Currently this is from backend')
})

app.listen(4334,()=>{
    console.log('Server started on http://localhost:4334')
})