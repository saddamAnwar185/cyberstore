const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const ConnectDB = require('./lib/Connection')
const fileUpload = require('express-fileupload')
const path = require('path')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 5000
ConnectDB()

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
}))
app.use(cors({
  credentials: true
}))

app.use(express.static(path.join(__dirname, "dist")));

// API Routes
app.use('/api', require('./Routes/User'))
app.use('/api', require('./Routes/Products'))
app.use('/api', require('./Routes/Cart'))
app.use('/api', require('./Routes/Order'))
app.use('/api', require('./Routes/Header'))

app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
