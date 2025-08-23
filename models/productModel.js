const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    description: String,
    image: String,
    category: String,
    reting: {
      rate: Number,
      count: Number,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {timeStamps: true}
);


module.exports = mongoose.model("Product",productSchema);