/*const express = require("express");
const { createAdminAccount } = require("../controller/adminCotroller");
const adminRouter = express.Router();

// router.post("/login", login);
adminRouter.post("/register", createAdminAccount);

module.exports = adminRouter;*/
const express = require("express");
const { adminLogin, adminRegister } = require("../controller/adminCotroller");
const adminRouter = express.Router();

adminRouter.post("/login",adminLogin)
adminRouter.post("/signup", adminRegister);
//new
module.exports = adminRouter;