var mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  title: String,
  slogan: String,
  description: String,
  stars: Number,
  category: {
    type: String,
    index: true
  },
  img_url: String,
  price: Number
});

module.exports = mongoose.model('Item', ItemSchema); 