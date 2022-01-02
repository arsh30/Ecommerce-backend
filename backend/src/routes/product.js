// const express = require("express");
// const { requireSignin, adminMiddleware } = require("../common-middleware");
// // const { createProduct } = require("../controller/product");
// // const Product = require("../models/product");
// const router = express.Router();


// router.post('/product/create', requireSignin, adminMiddleware, function (req, res) {
//     res.status(200).json({ message: "hello arsh here" });
    
// });
    
// // router.get('/category/getCategory', getCategories);  //-> if it admin then it will for the request to next user

// //adminMiddleware

// module.exports = router;

const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct } = require("../controller/product");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });    //it is middleware and it send the images to upload folder
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

//to convert it into jp img
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))  //path.dirnamegive you the current.directory
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})
  
const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array("productPicture") ,createProduct);  //requireSignin -> it will verify the user and it will attach the user
// router.get('/category/getCategory', getCategories);  //-> if it admin then it will for the request to next user

//adminMiddleware 

module.exports = router;

