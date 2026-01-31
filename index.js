require('dotenv').config()
const express = require("express");
const app = express();

const port = 4000;

const details = {
    name:'Ganesh',
    age:37,
    salary:4000000
}
app.get('/',(req,res)=>{
    res.send("I am home");
})

app.get('/about',(req,res)=>{
    res.send(details.name);
})

app.listen(port, ()=>{
    console.log(`Server is start at ${port}`);
    
})