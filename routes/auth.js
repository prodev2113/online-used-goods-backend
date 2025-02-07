const express = require("express");
const { register, login, logout } = require("../controllers/auth");

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);
router.post("/signout", logout);

module.exports = router;
