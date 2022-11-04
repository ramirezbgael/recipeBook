const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Types = require('./types.models')

const Ingredients = db.define('ingredients', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: 'id',
      model: Types
    },
    field: 'type_id'
  }
},{
  timestamps: false
})

module.exports = Ingredients