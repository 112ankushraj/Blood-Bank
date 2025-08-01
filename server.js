const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const path = require('path')

// dot config
dotenv.config()

// mongodb connection
connectDB();

// res object
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
// 1 test route
app.use('/api/v1/test',require('./routes/testRoutes'))
app.use('/api/v1/auth',require('./routes/authRouter'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))

// statics folder
// app.use(express.static(path.join(__dirname,'./client/dist')))

// static Routes

// app.get('*', function(req,res){
//   res.sendFile(path.join(__dirname,'./client/dist/index.html'))
// })



//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
  console.log(`Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`.bgBlue.white)
})
