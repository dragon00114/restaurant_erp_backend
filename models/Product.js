const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
    price: Number,
    addOnItems: [
      {
        name: String,
        isActive: Boolean,
        price: Number,
      },
    ],
  });
  const Product = mongoose.model('Product', productSchema);