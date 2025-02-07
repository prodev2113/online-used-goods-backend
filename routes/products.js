const router = require("express").Router();
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/products");
const { requireSeller } = require("../middlewares/authMiddleware");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", requireSeller, createOne);
router.put("/:id", requireSeller, updateOne);
router.delete("/:id", requireSeller, deleteOne);

module.exports = router;
