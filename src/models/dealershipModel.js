const mongoose = require('mongoose')
const ObjectId = mongoose.SchemaType.ObjectId
const dealershipSchema = mongoose.Schema({
    dealership_email: {
        type: String,
        required: true
    },
    dealership_name: { type: String },
    dealership_location: { type: String },



    password: {
        type: String,
        required: true
    },
    dealership_info: [],
    cars: { type: ObjectId },
    deals: { type: ObjectId },
    sold_vehicles: { type: ObjectId }
}, { timestamps: true })


modulele.exports = mongoose.model('dealership', dealershipSchema)