const { token } = require('../../jsonWebToken/index')

const singUpModule = require('../../modules/singUp/singUp.modele');

const singUp = async (req, res) => {

    try {
        const response = await singUpModule(req.body)

        const { type, status, message } = response

        if (type && status === 201) {
            const _token = token(message)
            return res.status(201).json({
                success: true,
                data: {
                    _token: _token,
                    _user: message
                },
                status: 201
            })
        }

        if (!type && status === 400) {

            const { code, keyValue, keyPattern, errors } = message

            if (message.hasOwnProperty("errors"))
                return res.status(400).json({
                    success: false,
                    data: errors
                })
            if (message.hasOwnProperty("code"))
                return res.status(200).json({
                    success: false,
                    data: {
                        message: `is really wrong `,
                        keyValue,
                        keyPattern
                    },
                    status: 200
                })
            if (!message.hasOwnProperty("code"))
                return res.status(400).json({ success: message.hasOwnProperty("code"), error: message.message })

        }
    } catch (error) {
        return res.status(500).json({ success: false, data: error.message })
    }

}






module.exports = singUp