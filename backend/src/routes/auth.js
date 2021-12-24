const express = require("express");
const { signup, signin } = require("../controller/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");
const router = express.Router();

router.post(
  "/signup",
  validateSignupRequest,
  isRequestValidated,
  signup //signup controller -> auth .js
);
router.post("/signup", validateSigninRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// })

module.exports = router;

// isRequestValidated is middle ware
// validate Request is a validate request
