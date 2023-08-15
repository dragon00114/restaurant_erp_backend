const Notification = require('../models/Notification');

const saveNotification = async (req, res) => {
    try{
        const {title, content, scheduleTime} = req.body;
        const notification = new Notification({title, content, scheduleTime});
        await notification.save();
        res.status(200).json({message : notification})
    }catch(err){
        console.error('Error ', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {saveNotification};