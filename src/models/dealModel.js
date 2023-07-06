const mongoose = require('mongoose')

const dealSchema = mongoose.Schema({
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    },
    deal_info: {}
}, { timestamps: true })

modulele.exports = mongoose.model('deal', dealSchema)