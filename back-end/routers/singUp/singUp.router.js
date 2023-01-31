const router = require("express").Router();
const singUpController = require("../../controllers/singUp/singUp.controller")
const singUp = require("../../helpers/filters/singUp");

router.post("/", singUp, singUpController)

module.exports = router;