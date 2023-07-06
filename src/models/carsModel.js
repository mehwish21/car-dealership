const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    type: { type: String },
    name: { type: String },
    model: { type: String },
    car_info: { type: String },

}, { timestamps: true })

modulele.exports = mongoose.model('Car', carSchema)