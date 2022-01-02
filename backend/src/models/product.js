const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      //slug is basically unique category we can not repeat anything
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    offer: {
      type: String,
    },
    productPictures: [
      {
        img: {
          type: String, //means we get the string url and  save the path of img
        },
      },
    ],
    reviews: [
      {
        //create a relationship who is going to add reviews ie is linking mongoDb and nosql and like a foreign key is called linking
        // so person who is creating review must have an account in this app ie  a foreign key
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorySchema",
      required: true,
    }, //it is like a foreign key ie linking ,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("productSchema", productSchema);
