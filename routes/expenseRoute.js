const express = require("express")
const router = express.Router()
const { getUserExpenses, addUserExpenses, deleteUserExpenses } = require("../controllers/expenseController")

router.get("/expenses", getUserExpenses)
router.post("/expenses", addUserExpenses)
router.delete("/expenses/:id", deleteUserExpenses)

module.exports = router