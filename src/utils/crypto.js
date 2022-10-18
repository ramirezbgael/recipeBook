//? Importing the bcrypt library for hashing passwords
const bcrypt = require('bcrypt')

//? Function for the hashing
const hashPassword = (plainPassword) =>{
  return bcrypt.hashSync(plainPassword, 10)
}

//? Function for comparing passwords
const comparePassword = (plainPassword, hashedPassword) =>{
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}