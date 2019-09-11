const mongoose = require('mongoose');

const character = new mongoose.Schema({
    name: String,
    full_name: String,
    crests: [Object],
    age: Number,
    height: String,
    birthday: String,
    noble: Boolean,
    stats: {
        base: {
            hp: Number,
            str: Number,
            mag: Number,
            dex: Number,
            spd: Number,
            luck: Number,
            def: Number,
            res: Number,
            cha: Number
        },
        max : {
            hp: Number,
            str: Number,
            mag: Number,
            dex: Number,
            spd: Number,
            luck: Number,
            def: Number,
            res: Number,
            cha: Number
        },
        growth_rate: {
            hp: Number,
            str: Number,
            mag: Number,
            dex: Number,
            spd: Number,
            luck: Number,
            def: Number,
            res: Number,
            cha: Number
        },
        proficiencies: {
            strengths: [String],
            weaknesses: [String],
            budding_talent: Object
        }
    },
    house: String,
    nationality: String,
    personal_skill: Object,
    gifts: Object,
    biography: String
}, { collection : 'character' })

module.exports = mongoose.model('character', character)
