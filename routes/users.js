const router = require("express").Router();
const { getOne, getAll } = require("../controllers/users");
const { requireUser, requireAdmin } = require("../middlewares/authMiddleware");

router.get("/", requireAdmin, getAll);
router.get("/:id", requireUser, getOne);

module.exports = router;
