const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDB = require('./config/dbConnection');
require('dotenv').config();



connectDB();
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000; 

app.use(express.json())
app.use("/api/jobs", require("./routes/jobRoutes"))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Job-Listing-System listening at http://localhost:${port}`)
})