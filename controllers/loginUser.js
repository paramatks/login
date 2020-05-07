const bcrypt = require('brypt')
const User = require('../models/user')

module.exports = (req, res) =>{
    const { username, password } = req.body;

    User.findOne({username:username}, (error,user) => {
        if(user){
            bcrypt.compare(password, user.password, (error, same) =>{
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
