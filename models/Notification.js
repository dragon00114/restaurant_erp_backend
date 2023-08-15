const mongoose = require('mongoose');
const { Schema } = mongoose;
const notificationSchema = new Schema({
  title: String,
  content: String,
  scheduleTime: {
    type : String, 
    enum: ['immediate', '15min', '30mim', "45min", "1hr", "2hr","5hr", "10hr", "15hr", "24hr", "2days", "week"],
    required: true,
  }
}, {timestamps : true});
const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;