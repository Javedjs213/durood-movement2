const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// DB Connect
connectDB();

// Routes
app.use("/api", require("./routes/submissionRoutes"));
app.get("/", (req, res)=>{
    res.send("Api is Working");
    // res.status(200).json({status: true, message: "Api is Working"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
