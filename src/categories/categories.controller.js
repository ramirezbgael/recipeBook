const Categories = require('../models/categories.models')

const findAll = async () =>{
  const response = await Categories.findAll()
  return response
}

const findByID = async(id) =>{
  const response = await Categories.findOne({
    where: {
      id: id
    }
  })
  return response
}

const create = async(name) =>{
  const response = await Categories.create({
    name: name
  })
  return response
}

const destroy = async (id) =>{
  const response = await Categories.destroy({
    where: {
      id: id
    }
  })
  return response
}

module.exports = {
  findAll,
  findByID, 
  create, 
  destroy
}