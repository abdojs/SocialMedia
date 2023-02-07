const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors')
const path = require("path");
const bodyParser = require('body-parser')
const app = express();

dotenv.config();

app.use(cors())

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

const { verify } = require("./jsonWebToken/index");

app.get("/apis/token/", (req, res) => {
    console.log(req.header("Authorization"));


    console.log(req.cookies);
    return res.status(200).json({
        data: {
            token: verify(req.header("Authorization")),
            co: req.cookies + "vavaa va va va v",
        }
    })
});
app.listen(8800, () => {
    console.log("Backend server is running!");
});

