require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenses');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/expenses', expenseRoutes);


const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI)
.then(() => app.listen(PORT, () => console.log('Server running on', PORT)))
.catch((err) => { console.error(err); process.exit(1); });