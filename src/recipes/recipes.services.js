const controller = require('./recipes.controller')

const getAll = (req, res) =>{
  controller.findAll()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getByID = (req, res) =>{
  const id = req.params.id
  controller.findByID(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      } else{
        res.status(400).json({message: `Invalid ID (${id})`})
      }
    })
    .catch(err =>{
      res.status(400).json({message: err.message})
    })
}

const post = (req, res) =>{
  const userId = req.user.id
  const {name, description, imgURL, time, portions, categoryId, origin} = req.body
  if(name && description && imgURL && time && portions && categoryId){
    controller.create({userId, name, description, imgURL, time, portions, categoryId, origin})
      .then(data =>{
        res.status(201).json({message: 'Created succesfully', data})
      })
      .catch(err =>{
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({
      message: 'Invalid data',
      fields: {
        name: 'string',
        description: 'string',
        time: 'number',
        portions: 'number',
        categoryId: 'number'
      }
    })
  }
}

const patchByID = (req, res) =>{
  const id = req.params.recipe_id
  const {name, description, imgURL, time, portions, categoryId, origin} = req.body
  if({name, description, imgURL, time, portions, origin, categoryId, origin}){
    controller.update(id,{name, description, imgURL, time, portions, categoryId, origin})
      .then(data =>{
        if(data[0]){
          res.status(201).json({message: `Element with ID ${id} was succesfully edited`})
        } else{
          res.status(404).json({message: 'Invalid ID', id})
        }
      })
      .catch(err =>{
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({
      message: 'Invalid data',
      fields: {
        name: 'string',
        description: 'string',
        time: 'number',
        portions: 'number',
        categoryId: 'number'
      }
    })
  }
}

const deleteByID = (req, res) =>{
  const id = req.params.recipe_id
  if(id){
    controller.destroy(id)
      .then(data =>{
        if(data){
          res.status(204).json({message: 'Deleted', data})
        } else{
          res.status(404).json({message: 'Invalid ID'})
        }
      })
      .catch(err =>{
        res.status(400).json({message: err.message})
      })
  } else{
    res.status(400).json({message: 'Invalid ID'})
  }
}

module.exports = {
  getAll,
  getByID,
  post,
  patchByID,
  deleteByID
}