const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
