const express=require('express')


const app=express()

const PORT=3000

app.get('/api',(req,res)=>{
    res.json({message:"This text from the Node Server.... "})
})

app.listen(PORT,()=>{console.log("The server is now running...")})