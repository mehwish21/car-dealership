const mongoose = require('mongoose')

const SoldVehiclesSchema = mongoose.Schema({
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },

    deal_info: { type: String }
}, { timestamps: true })

modulele.exports = mongoose.model('SoldVehicles', SoldVehiclesSchema)