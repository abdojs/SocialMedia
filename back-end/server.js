const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require('body-parser')
const app = express();

dotenv.config();

app.use("/images", express.static(path.join(__dirname, "public/uploads/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// routers in client 
const createRouter = require("./routers/singUp/singUp.router");
const loginRouter = require("./routers/singIn/singIn.router");

app.use("/apis/account/create", createRouter);
app.use("/apis/account/login", loginRouter);

app.listen(8800, () => {
    console.log("Backend server is running!");
});
