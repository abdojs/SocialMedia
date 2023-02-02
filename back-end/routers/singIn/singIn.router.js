const router = require("express").Router();
const singUpController = require("../../controllers/singIn/singIn.controller")
const singIn = require("../../helpers/filters/singIn");

router.post("/", singIn, singUpController)

module.exports = router;