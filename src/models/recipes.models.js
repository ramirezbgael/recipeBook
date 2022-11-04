const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Users = require('./users.models')
const Categories = require('./categories.models')

const Recipes = db.define('recipes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5
    }
  }, 
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  imgURL: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'img_url'
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: 'id',
      model: Users
    },
    field: 'user_id'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: 'id',
      model: Categories
    }, 
    field: 'category_id'
  }, 
  origin: {
    type: DataTypes.STRING
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
})

module.exports = Recipes