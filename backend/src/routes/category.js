const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { addCategory, getCategories } = require("../controller/category");

const router = express.Router();

router.post('/category/create',requireSignin,adminMiddleware ,addCategory);  //requireSignin -> it will verify the user and it will attach the user
router.get('/category/getCategory', getCategories);  //-> if it admin then it will for the request to next user

//adminMiddleware 

module.exports = router;

