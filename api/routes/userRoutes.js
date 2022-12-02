const { signUp, signIn, update } = require("../controllers/user");
const requireLogin = require("../middlewares/requireLogin");
const router = require("express").Router()

router.post("/sign-up", signUp)
router.post("/sign-in", signIn)
router.patch("/update", requireLogin, update)

module.exports = router;