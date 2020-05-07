const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const newUserController = require('./controllers/newUser')
const storeUserController = require ('./controllers/storeUser')
const bodyParser = require('body-parser')
const loginUserController = require('./controllers/loginUser')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('views'));
app.get('/', (req, res) => {
    res.render('index')
});
const server = app.listen(5000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
app.get('/about', (req, res) => {
    res.render ('about') ;
  });

  app.get('/register', (req, res) => {
    res.render ('register') ;
  });

  app.get('/index', (req, res) => {
    res.render ('index') ;
  });
  
  app.post('/register', storeUserController)
  
  //app.get('/result', (req, res) => {
    //var username = req.query.username;
    //var password = req.query.password;

    //console.log(username);
    //console.log(password);

    //res.render('result', {username: username, password: password})

    
    

  app.post('/controllers/newUser',(req,res)=>{
  console.log(req.body)
  res.redirect('/')
})
  

//app.get('/index', loginUserController);
  app.post('/index', storeUserController);
  
  


    
    
  

