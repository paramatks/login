const User = require ('../models/user.js')
const path = require ('path')

module.exports = (req,res) => {
    User.create(req.body, (error,user) => {
        console.log(error)
        console.log(user)
        res.redirect('/')
    })
}