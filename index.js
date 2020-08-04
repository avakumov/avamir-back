const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const fileUpload = require('express-fileupload')
dotenv.config()

// connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        console.log('connected to db   ')
        if (err) console.log(err)
    }
)

// import routes
const authRoutes = require('./routes/auth')
const tasksRoutes = require('./routes/tasks')
const booksRoutes = require('./routes/books')
const utilsRoutes = require('./routes/utils')
const verifyToken = require('./middleware/validate-token')

// middlewares
app.use('/files', express.static('files'))
app.use(fileUpload({ createParentPath: true }))
app.use(express.json()) // for body parser
app.use(cors())
// route middlewares
app.use('/auth', authRoutes)
app.use('/tasks', verifyToken, tasksRoutes)
app.use('/books', verifyToken, booksRoutes)
app.use('/utils', utilsRoutes)

app.listen(4000, () => console.log('server is running...'))
