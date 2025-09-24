const express = require('express');
const router = express.Router();
const ctrl = require("../controllers/expenseController");


router.post('/', ctrl.createExpense);
router.get('/', ctrl.getExpenses);
router.get('/:id', ctrl.getExpense);
router.put('/:id', ctrl.updateExpense);
router.delete('/:id', ctrl.deleteExpense);


module.exports = router;