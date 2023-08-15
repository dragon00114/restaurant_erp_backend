const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    fieldname: {
        type : String,
        required : true
    },
    originalname: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    userID : {
        type : String,
        required: true,
    }
  }, {timestamps : true});
  module.exports = mongoose.model('Banner', bannerSchema);