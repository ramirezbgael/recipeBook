const cors = require('cors')
const express = require('express')
const authRouter = require('./auth/auth.router')
const usersRouter = require('./users/users.router')
const categoriesRouter = require('./categories/categories.router')
const recipesRouter = require('./recipes/recipes.router')
const ingredientsRouter = require('./ingredients/ingredients.router')
const {port} = require('./config')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    users: `localhost:${port}/api/v1/users`
  })
})

const initModels = require('./models/initModels')
const db = require('./utils/database')
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err))
db.sync()
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.log(err))
  initModels()

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/recipes', recipesRouter)
app.use('/api/v1/ingredients', ingredientsRouter)

app.listen(port, ()=>{
  console.log(`Server started at port ${port}`)
})