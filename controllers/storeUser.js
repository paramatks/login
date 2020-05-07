const User = require ('../models/user.js')
const path = require ('path')

module.exports = (req,res) => {
    console.log("request body", req.body)
    User.create(req.body, (error,user) => {
        console.log(error)
        console.log(user)
        if(error){
            return res.redirect('register')
        }
        res.redirect('/')
    })
}