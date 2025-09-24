const Expense = require('../models/Expense');


exports.createExpense = async (req, res) => {
try {
const expense = new Expense(req.body);
const saved = await expense.save();
res.status(201).json(saved);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.getExpenses = async (req, res) => {
try {
const { month, category } = req.query;
const filter = {};
if (category) filter.category = category;
if (month) {
const start = new Date(month + '-01');
const end = new Date(start);
end.setMonth(end.getMonth() + 1);
filter.date = { $gte: start, $lt: end };
}
const expenses = await Expense.find(filter).sort({ date: -1 });
res.json(expenses);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.getExpense = async (req, res) => {
try {
const expense = await Expense.findById(req.params.id);
if (!expense) return res.status(404).json({ error: 'Not found' });
res.json(expense);
} catch (err) {
res.status(500).json({ error: err.message });
}
};


exports.updateExpense = async (req, res) => {
try {
const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(updated);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.deleteExpense = async (req, res) => {
try {
await Expense.findByIdAndDelete(req.params.id);
res.json({ success: true });
} catch (err) {
res.status(500).json({ error: err.message });
}
};