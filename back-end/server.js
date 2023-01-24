const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

dotenv.config();


const { coonect, desconnect } = require("./dataBase/connect")

coonect.then(function () {

    console.log("create query: ");
})
desconnect

app.use("/images", express.static(path.join(__dirname, "public/uploads/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.listen(8800, () => {
    console.log("Backend server is running!");
});
