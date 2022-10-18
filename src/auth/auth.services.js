const { loginUser } = require("./auth.controller")
const jwt = require('jsonwebtoken')
const {key} = require('../config').jwt

const login = (req, res) =>{
  const {email, password} = req.body

  if (email && password) {
    loginUser(email, password)
      .then(response =>{
        if(response){
          const token = jwt.sign({
            id: response.id,
            email: response.email,
            role: response.role
          }, key)
          res.status(200).json({message: 'Correct credentials', token})
        } else {
          res.status(401).json({message: 'Invalid credentials'})
        }
      })
      .catch(err =>{
        res.status(401).json({message: err.message})
      })
  }
}

module.exports = {
  login
}