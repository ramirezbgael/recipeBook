//? Importing the controllers
const usersController = require('./users.controller')

//? Gets all the users
const getAllUsers = (req, res) =>{
  usersController.findAllUsers()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

//? Gets one user
const getOneUser = (req, res) =>{
  const id = req.params.id
  usersController.findOneUser(id)
    .then(response =>{
      res.status(200).json(response)
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

//? Posts one user
const postUser = (req, res) =>{
  const { firstName, lastName, email, password, phone, birthday, gender, country } = req.body
  
  if (firstName && lastName && email && password && phone && birthday){
    usersController.createUser({ firstName, lastName, email, password, phone, birthday, gender, country })
      .then(response => {
        res.status(201).json([{message: 'User created'},response])
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else {
    res.status(400).json({
      message: 'Missing or wrong data',
      values: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        password: 'String',
        phone: 'String',
        birthday: 'String'
      }
    })
  }
}

//? Puts (changes) one user
const putUser = (req, res) =>{
  const id = req.params.id
  const { firstName, lastName, email, password, phone, birthday, gender, country } = req.body
  
  if (firstName && lastName && email && password && phone && birthday){
    usersController.updateUser(id, { firstName, lastName, email, password, phone, birthday, gender, country })
      .then(response => {
        res.status(201).json({message: 'User updated'})
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({
      message: 'Missing or wrong data',
      values: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        password: 'String',
        phone: 'String',
        birthday: 'String'
      }
    })
  }
}

//? Patches one user
const patchUser = (req, res) =>{
  const id = req.params.id
  const { firstName, lastName, email, password, phone, birthday, gender, country } = req.body
  
  if ({ firstName, lastName, email, password, phone, birthday, gender, country }){
    usersController.updateUser(id, { firstName, lastName, email, password, phone, birthday, gender, country })
      .then(response => {
        res.status(201).json({message: 'User patched'})
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({
      message: 'Missing or wrong data',
      values: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        password: 'String',
        phone: 'String',
        birthday: 'String'
      }
    })
  }
}

//? Deletes one user
const deleteUser = (req, res) =>{
  const id = req.params.id
  usersController.destroyUser(id)
    .then(response => {
      res.status(204).json({message: 'Deleted'})
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

//? ======= /ME SERVICES ========
const getMyUser = (req, res) =>{
  const id = req.user.id
  usersController.findOneUser(id)
    .then(response =>{
      res.status(200).json(response)
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

const patchMyUser = (req, res) =>{
  const id = req.user.id
  const { firstName, lastName, email, password, phone, birthday, gender, country } = req.body
  
  if ({ firstName, lastName, email, password, phone, birthday, gender, country }){
    usersController.updateUser(id, { firstName, lastName, email, password, phone, birthday, gender, country })
      .then(response => {
        res.status(201).json({message: 'User patched'})
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({
      message: 'Missing or wrong data',
      values: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        password: 'String',
        phone: 'String',
        birthday: 'String'
      }
    })
  }
}

const deleteMyUser = (req, res) =>{
  const id = req.user.id
  usersController.destroyUser(id)
    .then(response =>{
      res.status(204).json({message: `User ${id} deleted`, response})
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

//? Exports the functions
module.exports = {
  getAllUsers,
  getOneUser,
  postUser,
  putUser,
  patchUser, 
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser
}