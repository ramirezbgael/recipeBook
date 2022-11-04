const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Recipes = require('./recipes.models')

const Instructions = db.define('instructions', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  }, 
  recipeId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'recipe_id',
    references: {
      key: 'id',
      model: Recipes
    }
  },
  step: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Instructions