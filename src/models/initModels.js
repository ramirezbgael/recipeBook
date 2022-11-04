//? Importing the model we're gonna use
const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')

//? Determining the models to initialize
const initModels = () =>{

  //* Users 1*M recipes
  Users.hasMany(Recipes)
  Recipes.belongsTo(Users)

  //* Users 1*M userRecipes
  Users.hasMany(UsersRecipes)
  UsersRecipes.belongsTo(Users)

  //* Recipes 1*M userRecipes
  Recipes.hasMany(UsersRecipes)
  UsersRecipes.belongsTo(Recipes)

  //* Users 1*M userIngredients
  Users.hasMany(UsersIngredients)
  UsersIngredients.belongsTo(Users)

  //* Categories 1*M Recipes
  Categories.hasMany(Recipes)
  Recipes.belongsTo(Categories)

  //* Types 1*M Ingredients
  Types.hasMany(Ingredients)
  Ingredients.belongsTo(Types)

  //* Ingredients 1*M RecipesIngredients
  Ingredients.hasMany(RecipesIngredients)
  RecipesIngredients.belongsTo(Ingredients)

  //* Recipes 1*M RecipesIngredients
  Recipes.hasMany(RecipesIngredients)
  RecipesIngredients.belongsTo(Recipes)

  //* Ingredients 1*M UsersIngredients
  Ingredients.hasMany(UsersIngredients)
  UsersIngredients.belongsTo(Ingredients)

  //* Recipes 1*M Instructions
  Recipes.hasMany(Instructions)
  Instructions.belongsTo(Recipes)

}
//? Exporting the function
module.exports = initModels