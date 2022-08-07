const express = require('express')
const app = express()

const taskRoutes = require('./routes/tasks')

const PORT = 3000

app.use('/', taskRoutes)

app.listen(PORT, () => 
console.log(`server running on port ${PORT}`)
)