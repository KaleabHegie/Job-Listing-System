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
app.use("/api/company", require("./routes/companyRoutes"))
app.use("/api/skills", require("./routes/skillRoutes"))
app.use("/api/sectors", require("./routes/sectorRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Job-Listing-System listening at http://localhost:${port}`)
})