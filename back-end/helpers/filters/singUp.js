const filterEmail = require("./inputs/email.filter")
const filterPassword = require("./inputs/password.filter")
const filterName = require("./inputs/name.filter")
const filterPhone = require("./inputs/phone.filter")
const emptyReqBody = require("./reqBody/empty.filter")
const lengthReqBody = require("./reqBody/length.filter")
const searchReqBody = require("./reqBody/search.filter")

const singUp = (req, res, next) => {


    let arrayErrors = []

    try {

        emptyReqBody(req.body, "not found any inputs from [ phone , email ,password , name ]")

        lengthReqBody(req.body, "count inputs > number [ 4 ] or < number [ 4 ]  and names files [ phone , email ,password , name ]", 4)

        searchReqBody(req.body, "not found names inputs", ["phone", "email", "password", "name"])

        const { email, password, phone, name } = req.body

        const { Phone, Message } = filterPhone(phone)
        const resEmail = filterEmail(email)
        const resPassword = filterPassword(password)
        const resName = filterName(name)

        if (typeof resEmail.Email === "boolean" && !resEmail.Email)
            arrayErrors.push(resEmail)

        if (typeof resPassword.Password === "boolean" && !resPassword.Password)
            arrayErrors.push(resPassword)

        if (typeof resName.Name === "boolean" && !resName.Name)
            arrayErrors.push(resName)

        if (typeof Phone === "boolean" && !Phone)
            arrayErrors.push({ Phone, Message })

        if (arrayErrors.length)
            throw { message: arrayErrors }

        next()
    } catch (error) {
        res.status(400).json(error)
    }



}

module.exports = singUp






