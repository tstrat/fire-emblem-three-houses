const express = require('express')
const mongoose = require('mongoose')
const characterController = require('./controllers/characterController')
require('dotenv').config();

const { CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express()
app.use(express.json());
mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true}).then(console.log('connected'));


app.get('/api/v1/characters', characterController.getCharacters)
app.get('/api/v1/characters/:name', characterController.getCharacter)
app.put('/api/v1/characters', characterController.updateCharacter)
app.post('/api/v1/characters', characterController.addCharacter)
app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`));
