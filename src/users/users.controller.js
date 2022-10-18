//? Dependencies
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

//? Importing the Users model
const Users = require('../models/users.models')

//? Function for getting all the users
const findAllUsers = async() =>{
  const response = await Users.findAll()
  return response
}

//? Function for getting just on e user by its ID
const findOneUser = async(id) =>{
  const response = await Users.findOne({
    where:{
      id: id
    }
  })
  return response
}

const findUserByEmail = async(email) =>{
  const response = await Users.findOne({
    where:{
      email: email
    }
  })
  return response 
}

//? Function for creating a new user (POST)
const createUser = async(data) =>{
  const response = await Users.create({
    id: uuid.v4(),
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    country: data.country
  })
  return response
}

//? Function for editing an user (PUT, PATCH)
//* The difference between put and patch is managed in the service
const updateUser = async(id, data) =>{
  const response = await Users.update({
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    birthday: data.birthday,
    gender: data.gender,
    country: data.country,
    status: data.status
  },{
    where: {
      id: id
    }
  })
  return response
}

//? Function for deleting a user
const destroyUser = async(id) =>{
  const response = await Users.destroy({
    where: {
      id: id
    }
  })

  return response
}

//? Exporting the controllers
module.exports = {
  findAllUsers,
  findOneUser,
  findUserByEmail,
  createUser,
  updateUser,
  destroyUser
}