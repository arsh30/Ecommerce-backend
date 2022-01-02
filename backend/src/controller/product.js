// const express = require("express");
// const router = express.Router();
const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");

exports.createProduct = function (req, res) {
  // res.status(200).json({ message: "hello" });
  // res.status(200).json({
  //     file: req.files, body: req.body
  //     // handling array for multiple files
  // });

  // remaining from 30min

  const { name, price, description, category, quantity, createdBy } = req.body;

  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename }; //update the changes,it is a object product picture with img
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};
