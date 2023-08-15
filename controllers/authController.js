const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');
const nodemailer = require('nodemailer');
const uuid = require('uuid');


const register = async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body; 
      console.log(firstName, lastName, email);
      // Check if the username is already taken
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword =await bcrypt.hash(password, 10);
      // Create a new user
      const newUser = new User({ firstName, lastName, email, password : hashedPassword, role : "admin", 
      displayName : '', photoURL : '', phoneNumber: '', country : '', address : '', state : '', city : '', zipCode : '', about : '', isPublic : false 
    });
      await newUser.save();
      const user = await User.findOne({ email });
      
      const token = jwt.sign({ userId: user._id }, config.secretKey);
      res.status(200).json({ accessToken : token, user :  user});
    } catch (error) {
      console.error('Error during user registration', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, config.secretKey);
      res.status(200).json({ accessToken : token, user :  user});
    } catch (error) {
      console.error('Error during user login', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  const profileUpdate = async (req, res) => {
    try{
      const {email, displayName, about, address, city, country, state, zipCode, isPublic, phoneNumber, photoURL, } = req.body;
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, config.secretKey);
      const userId = decoded.userId;

      const updatedFields = {
        email,
        displayName,
        about,
        address,
        city,
        country,
        state,
        zipCode,
        isPublic,
        phoneNumber,
        photoURL,
      };
      const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'The profile updated', user: updatedUser });

    }catch(error){
      console.log(error);
    }
  }

const protected = (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
};

const fetchUserList = async (req, res) => {
  try{
    const user = await User.find();
    res.status(200).json({ user: user });

  }catch(error){
    console.error('Error during user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const transporter = nodemailer.createTransport({
  service: 'Reset Email Password',
  auth: {
    user: 'psj00114@outlook.com',
    pass: 'psj00114',
  },
});

const resetPassword = (req, res) => {
  const { email } = req.body;
  const token = uuid.v4();
  const mailOptions = {
    from: 'psj00114@outlook.com',
    to: email,
    subject: 'Password Reset Confirmation',
    text: `Click the link to reset your password: http://your_app_url/reset-password/${token}`,
  };
  console.log(mailOptions.text);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
};


const isAuthenticated = async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const decoded = jwt.verify(token, config.secretKey);
  const userID = decoded.userId;
  const user = await User.findOne({ userID });
  if(!user){
    res.status(500).json({message : "Internal Server Error"});
    return;
  }
  res.status(200).json({user : user});
}

module.exports = {
    login, register, protected, profileUpdate, fetchUserList, resetPassword, isAuthenticated
}


