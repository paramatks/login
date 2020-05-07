const bcrypt = require('bcrypt')
const User = require('../models/user.js')

module.exports = (req, res) =>{
    const { username, password } = req.body;

    User.findOne({username:username}, (error,User) => {
        if(User){
            bcrypt.compare(password, User.password, (error, same) =>{
                if(same){
                    res.redirect('/')
                }
                else{
                    res.redirect('register')
                }
            })


        }
        else{
            res.redirect('register')
        }
    })
}
