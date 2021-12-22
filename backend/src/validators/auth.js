// it will work for admin as well as user
const { check, validationResult } = require("express-validator");
exports.validateRequest = [
  check("firstName").notEmpty().withMessage("first Name is Required"),
  check("lastName").notEmpty().withMessage("last Name is required"),
  check("lastName"),
  check("email").isEmail().withMessage("valid Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 character long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
}
next();
};
