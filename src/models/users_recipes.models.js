const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Recipes = require('./recipes.models')
const Users = require('./users.models')

const UsersRecipes = db.define('users_recipes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  }, 
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      key: 'id',
      model: Users
    }
  }, 
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references:{
      key: 'id',
      model: Recipes
    }
  }, 
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = UsersRecipes