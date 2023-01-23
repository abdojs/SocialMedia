const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

dotenv.config();


console.log(process.env);


// mongoose.connect(
//     process.env.MONGO_URL,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => {
//         console.log("Connected to MongoDB");
//     }
// );
app.use("/images", express.static(path.join(__dirname, "public/uploads/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.listen(8800, () => {
    console.log("Backend server is running!");
});
