const express = require('express')
const app = express()
const bodyParser = require('body-parser')
urlEncodedParser = bodyParser.urlencoded({extended:false})
app.set("view engine","ejs")
app.use(bodyParser.json())

let task = []

app.get('/',(req,res)=>{
    res.render('todo',{
        data:task
    })
})
id=0
app.post('/post',urlEncodedParser,(req,res)=>{
    if(req.body.task!=""){
        let date = new Date();
        let created = date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear()
        task.push({"task":req.body.task,"dateCreated":created})
    }
    res.redirect('/')
})
app.get('/delete/:i',urlEncodedParser,(req,res)=>{
    task.splice(req.params.i,1)
    res.redirect('/')
})
app.listen(3000,(err)=>{
    if(err)throw(err);
    console.log("Server is listening at port 3000")
})