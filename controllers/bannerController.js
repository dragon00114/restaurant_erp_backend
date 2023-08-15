const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Banner = require('../models/banner');

const saveBannnerImage = (req, res) => {
    const file = req.file;
    if (!file) {
      res.status(400).json({ message: 'No image file provided' });
    } else {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, config.secretKey);
      const userId = decoded.userId;
      const fieldname = req.file.fieldname;
      const originalname = req.file.originalname;
      const destination = req.file.destination;
      const filename = req.file.filename;

      const updatedFields = {
        userId,
        fieldname,
        originalname,
        destination,
        filename
      };

      const newBanner = new Banner({userID : userId, fieldname : fieldname, originalname : originalname, destination : destination, filename : filename});
      newBanner.save();
      res.status(200).json({ message: 'Image uploaded successfully' });
    }
};


const getBanner = async (req, res) => {
  const banner = await Banner.find();
  res.status(200).json({message : "OK", banner : banner});
}

module.exports = {saveBannnerImage, getBanner};