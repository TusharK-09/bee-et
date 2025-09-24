const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
title: { type: String, required: true },
amount: { type: Number, required: true },
date: { type: Date, required: true },
category: { type: String, required: true },
notes: { type: String },
}, { timestamps: true });  


module.exports = mongoose.model('Expense', ExpenseSchema);