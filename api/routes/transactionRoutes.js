const { deposit, requestForWithdrawal, getUserTransactions, getTransaction, getAllTransactions } = require("../controllers/transaction");
const requireLogin = require("../middlewares/requireLogin");
const router = require("express").Router()

router.post("/deposit", requireLogin, deposit)
router.post("/requestForWithdrawal", requireLogin, requestForWithdrawal)
router.get("/user-transaction", requireLogin, getUserTransactions)
router.get("/:id", requireLogin, getTransaction)
router.get("/all", requireLogin, getAllTransactions)

module.exports = router;