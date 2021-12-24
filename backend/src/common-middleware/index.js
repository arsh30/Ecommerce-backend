const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    // console.log("header = ", req.headers);
  if (req.headers.authorization) {
    const token = req.headers.authorization;   //here is error occur ie only admin add Categories
      const user = jwt.verify(token, process.env.JWT_SECRET);
    //   console.log("user = ",user);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization required[Invalid]" });
    //jwt code
  }
  next();
};

//Authentication -> create only user can create the categories & only admin  can create the categories

exports.userMiddleWare = (req, res, next) => {
  //for usersOnly
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "User Access Denied" });
  }
  next();
};
exports.adminMiddleware = (req, res, next) => {
  //for admin
  if (req.user.role !== "admin") {
    return res
      .status(400)
      .json({ message: "Admin Access Denied[Only admin can create]" });
  }
  next();
};

// fetching categories doenot need permission anyone can fetch the categories you dont need to logged in to ecommerce to check products
