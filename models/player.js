const mongoose = require('mongoose')

const { Schema } = mongoose

const playerSchema = new Schema({
    name: { type: String, require: true },
    pointsPerGame: { type: Boolean },
    reboundsPerGame: { type: Boolean },
    assistsPerGame: { type: Boolean },
    blocksPerGame: { type: Boolean },
    stealsPerGame: { type: Boolean },
    fieldGoalPercentage: { type: Boolean },
    threePointersMade: { type: Boolean },
    threePointPercentage: { type: Boolean }
})