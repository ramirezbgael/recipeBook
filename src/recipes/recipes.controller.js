const uuid = require('uuid')
const Recipes = require('../models/recipes.models')

const findAll = async () =>{
  const response = await Recipes.findAll()
  return response
}

const findByID = async(id) =>{
  const response = await Recipes.findOne({
    where: {
      id: id
    }
  })
  return response
}

const create = async(input) =>{
  const response = await Recipes.create({
    id: uuid.v4(),
    name: input.name,
    description: input.description,
    imgURL: input.imgURL,
    time: input.time,
    portions: input.portions,
    userId: input.userId,
    categoryId: input.categoryId,
    origin: input.origin,
    likes: input.likes
  })
  return response
}

const update = async(input, id) =>{
  const response = await Recipes.update(input, {
    where: {
      id: id
    }
  })
  return response
}

const destroy = async (id) =>{
  const response = await Recipes.destroy({
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
  update,
  destroy
}