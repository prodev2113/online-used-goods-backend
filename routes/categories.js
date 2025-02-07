const router = require("express").Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/categories");
const { requireAdmin } = require("../middlewares/authMiddleware");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", requireAdmin, createOne);
router.put("/:id", requireAdmin, updateOne);
router.delete("/:id", requireAdmin, deleteOne);

module.exports = router;
