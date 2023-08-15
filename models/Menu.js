const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: String,
    items: [
      {
        name: String,
        description: String,
        price: Number,
      },
    ],
  });
  const Menu = mongoose.model('Menu', menuSchema);