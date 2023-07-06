// userSchema.js
const UserSchema = {
    user_email: {
      type: String,
      required: true
    },
    user_location: {
      type: String
    },
    user_info: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    vehicle_info: {
      type: String,
      required: true
    }
  };
  
  module.exports = UserSchema;
  



















// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     user_email: {
//         type: String,
//         required: true
//     },
//     user_location: { type: String },

//     user_info: {type :String},

//     password: {
//         type: String,
//         required: true
//     },
//     vehicle_info: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true
//     }
// }, { timestamps: true })

// modulele.exports = mongoose.model('User', UserSchema)