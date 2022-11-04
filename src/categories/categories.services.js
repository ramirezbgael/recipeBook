const controller = require('./categories.controller')

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
  const {name} = req.body

  if(name){
    controller.create(name)
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
        name: 'string'
      }
    })
  }
}

const deleteByID = (req, res) =>{
  const id = req.params.id
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
  deleteByID
}