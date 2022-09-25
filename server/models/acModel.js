const mongoose = require('mongoose')

const acSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Something Went Wrong In Model'],

    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Ac', acSchema)