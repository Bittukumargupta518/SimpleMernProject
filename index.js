const express =require('express');
const makeAdmin = require('./makeAdmin');
const path = require('path');
const connect = require('./connection');
const user = require('./routes/user');
const student = require('./routes/student')
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(user);
app.use(student);
connect();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));  


app.listen(8000,(err)=>{
  if(err){
    console.log(err);
    console.log('hvf');
    
  }else{
    console.log("server is running on 8000");
  }
})