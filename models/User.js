const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    displayName: String,
    email: String,
    password: String,
    photoURL: String,
    phoneNumber: String,
    country: String,
    address: String,
    state: String,
    city: String,
    zipCode: String,
    about: String,
    role: String,
    isPublic: Boolean
}, {timestamps : true});

module.exports = mongoose.model('User', userSchema);
