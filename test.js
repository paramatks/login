const mongoose = require('mongoose')

const User = require('./models/user')

mongoose.connect('mongodb://localhost/my_database',
{useNewUrlParser: true});

User.create({
username: 'Hello',
password: 'Hi'



},(error,user)=>{
    console.log(error,user)

})