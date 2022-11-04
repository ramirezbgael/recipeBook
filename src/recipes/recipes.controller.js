const uuid = require('uuid')
const Recipes = require('../models/recipes.models')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Instructions = require('../models/instructions.models')
const RecipeIngredients = require('../models/recipes_ingredients.models')
const Ingredients = require('../models/ingredients.models')
const Types = require('../models/types.models')
const UsersIngredients = require('../models/users_ingredients.models')

const findAll = async () =>{
  const response = await Recipes.findAll({
    attributes: {
        exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
    },
    include: [
        {
            model: Categories
        },
        {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        },
        {
            model: Instructions,
            attributes: ['step', 'description']
        },
        {
            model: RecipeIngredients,
            include: {
                model: Ingredients,
                include: {
                    model: Types
                }
            }
        }
    ]
})
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