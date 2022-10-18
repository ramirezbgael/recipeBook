const { findUserByEmail } = require('../users/users.controller')
const { comparePassword } = require('../utils/crypto')

const loginUser = async(email, password) =>{
  try {
    const user = await findUserByEmail(email)
    const verifyPassword = comparePassword(password, user.password)
    if(verifyPassword) {
      return user
    } else{
      return false
    }
  } catch {
    return false
  }
}

module.exports = {
  loginUser
}