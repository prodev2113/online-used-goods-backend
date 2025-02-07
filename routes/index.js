const router = require("express").Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the online-used-goods Server!" });
});

module.exports = router;
