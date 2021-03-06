const Character = require('../schema/characterSchema');
const mongoose = require('mongoose')
const edle = require('./edle.json');
var connection = mongoose.connection;

module.exports = {
    getCharacters: async (req, res) => {
        const characterList = await Character.find({})

        res.status(200).send(characterList)
    },
    getCharacter: async (req, res) => {
        const { name } = req.params;
        console.log(name);
        const character = await Character.find({name: new RegExp(name, 'i')})

        res.status(200).send(character);
    },
    updateCharacter: async (req, res) => {
        const { content } = req.body; // for auth later attach middleware
        const ch =  await Character.replaceOne({name: content.name}, content)
        res.status(200).send({ status: 'updated', content: ch})
    },
    addCharacter: (req, res) => {
        const { content } = req.body;  // for auth later attach middleware
        const newChar = new Character(content)
        newChar.save() // adds character to collection
        res.status(200).send(newChar);
    }

}
