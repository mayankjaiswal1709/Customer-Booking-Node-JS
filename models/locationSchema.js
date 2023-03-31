
const mongoose = require('mongoose')
const locationSchema = new mongoose.Schema({


    locationName: {
        type: String,
        require: true,
    },
    location_image: {
        type: String,
    },
    isactive: {
        type: Boolean,
        require: true,
    },
    

})
locationSchema.set('timestamps', true)

module.exports = mongoose.model('location', locationSchema)