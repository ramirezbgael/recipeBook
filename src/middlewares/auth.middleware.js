// Middleware for protecting routes
// 1.- Checks if there's a token
// 2.- Verifies if that token belongs to a valid user
// 3.- Modifies the request and adds the req.user with the unencripted information from the token

const { findOneUser } = require('../users/users.controller')
const {key} = require('../config').jwt
//? Passport uses strategies for the different authentications
const strategyJWT = require('passport-jwt').Strategy
//? This function extracts the token from the request headers
const extractJWT = require('passport-jwt').ExtractJwt

// Exporting an anonym funtion
module.exports = (passport) =>{
  const options = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: key
  }

  passport.use(
    new strategyJWT(options, async(decoded, done) =>{
      try {
        const response = await findOneUser(decoded.id)
        if(!response){
          return done(null, false)
        }
        console.log('decoded JWT', decoded)
        return done(null, decoded)
      } catch (error) {
        return done(error, false)
      }
    })
  )  
}