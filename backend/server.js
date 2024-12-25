const express = require('express');
const dotenv = require('dotenv');
const nodemon = require('nodemon');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 5000
require('dotenv').config();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/users', require('./routes/userRoutes'));



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

