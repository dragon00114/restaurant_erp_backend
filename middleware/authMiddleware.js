const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');




const authentication = async (req, res, next) => {
    try {
      // const token = req.header('Authorization').replace('Bearer ', '');
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGE0ZTRjYTkzZjRmZDcyMjE5YzU2NzUiLCJpYXQiOjE2ODg1NDYzMDV9.7s0DT5WGMk4PoDMi9ya9TMsnkDw6Ai0_NgvCogVlqtg";
      const decoded = jwt.verify(token, config.secretKey);
      const user = await User.findOne({ _id: decoded.userId });
      console.log(user);
  
      if (!user) {
        throw new Error();
      }
  
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };

  const isAdmin = async (req, res, next) => {
    try{
      // const token = req.header('Authorization').replace('Bearer ', '');
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGE0ZTRjYTkzZjRmZDcyMjE5YzU2NzUiLCJpYXQiOjE2ODg1NDYzMDV9.7s0DT5WGMk4PoDMi9ya9TMsnkDw6Ai0_NgvCogVlqtg";
      const decoded = jwt.verify(token, config.secretKey);
      const user = await User.findOne({ _id: decoded.userId});
      console.log(user);
      if(user.role != "admin"){
        res.status(204).json({message : "not admin"})
      }
      next();
    }catch(err){
      res.status(401).json({message : 'Permissioned'})
    }
  }  
  module.exports = {authentication,isAdmin};