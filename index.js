const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/productRouter');
require('dotenv').config();
const app = express();
connectDB();
const PORT = process.env.PORT ||5000;
//middleware
app.use(cors());
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
  res.status(404).json({
    message:'not found'
  })
})
app.listen(PORT, (req, res) => {
  console.log(`app is running on http://localhost:${PORT}`)
})
