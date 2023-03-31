
const mongoose = require('mongoose')
const droneSchema = new mongoose.Schema({


    droneName: {
        type: String,
        require: true,
    },
    drone_image: {
        type: String,
    },
    isactive: {
        type: Boolean,
        require: true,
    },


})
droneSchema.set('tiemstamp', true)

module.exports = mongoose.model('drone', droneSchema)