

const singInModule = require('../../modules/singIn/singIn.module');

const filterEmail = require("../../helpers/filters/inputs/email.filter");


const singIn = async (req, res) => {

    try {

        const withLogin = filterEmail(req.body.emailPhone).Email

        const response = await singInModule(req.body, withLogin)

        const { type, status, message } = response

        return res.status(status).json({
            success: type,
            data: message,
            status
        })

    } catch (error) {
        return res.status(500).json({ success: false, data: error.message })
    }

}






module.exports = singIn