const express = require("express");
const { signup, signin, requireSignin } = require("../controller/auth");
const { validateRequest, isRequestValidated } = require("../validators/auth");
const router = express.Router();

router.post(
  "/signup", validateRequest,isRequestValidated,signup //signup controller -> auth .js
);
router.post("/signin", signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// })

module.exports = router;


// isRequestValidated is middle ware
// validate Request is a validate request
