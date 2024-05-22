require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 8000

app.use(cors(
    {
        origin: 'https://www.downtownfnb.com',
        methods: 'GET, POST',
        credentials: true
    }

))

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
})

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err)
})

// Define a User schema
const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Number: String,
    Message: String
})

// Create a User model
const User = mongoose.model('User', userSchema, 'info')

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// Get to show message for success connection
app.get('/', (req, res) => {
    res.json('Hello world!')
})

// Endpoint to save user information
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// Start the server
app.listen(PORT, () => {
    console.log(`Backend Server is running on port ${PORT}`)
})