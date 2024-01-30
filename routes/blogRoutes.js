const Router = require("express");
const authController = require("../controllers/blogController");
const router = Router();

router.get("/blogs", authController.view_blogs);
router.get("/blog/:id", authController.view_blog);
router.post("/blog/add", authController.add_blog);
router.post("/blog/update/:id", authController.update_blog);
router.delete("/blog/delete/:id",authController.delete_blog);

module.exports = router;