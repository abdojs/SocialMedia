const filterEmail = require("./inputs/email.filter")
const filterPassword = require("./inputs/password.filter")
const filterPhone = require("./inputs/phone.filter")
const emptyReqBody = require("./reqBody/empty.filter")
const lengthReqBody = require("./reqBody/length.filter")
const searchReqBody = require("./reqBody/search.filter")

const singIn = (req, res, next) => {

    let arrayErrors = []

    try {

        emptyReqBody(req.body, "not found any inputs from [ phoneEmail ,password ]")

        lengthReqBody(req.body, "count inputs > number [ 2 ] or < number [ 2 ]  and names files [ [phone or email] ,password  ]", 2)

        searchReqBody(req.body, "not found names inputs", ["emailPhone", "password"])

        const { emailPhone, password } = req.body

        const resEmail = filterEmail(emailPhone)

        const resPassword = filterPassword(password)

        if (typeof resEmail.Email === "boolean" && !resEmail.Email) {
            const { Phone, Message } = filterPhone(emailPhone)
            if (typeof Phone === "boolean" && !Phone)
                arrayErrors.push({ phone: { Phone, Message }, email: resEmail })
        }

        if (typeof resPassword.Password === "boolean" && !resPassword.Password)
            arrayErrors.push(resPassword)

        if (arrayErrors.length)
            throw { success: false, data: arrayErrors }

        next()
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = singIn






