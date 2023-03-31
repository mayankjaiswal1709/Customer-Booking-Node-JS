const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({


    username: {
        type: String,
        require: true,

    },
    phone: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "customer"
    },
    profilepic: {
        type: String,
    },
    is_active: {
        type: Boolean,
        default: true,
    },


})
customerSchema.set('timestamps', true)

module.exports = mongoose.model('user', customerSchema)