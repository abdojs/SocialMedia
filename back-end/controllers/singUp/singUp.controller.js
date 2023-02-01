

const singUpModule = require('../../modules/singUp/singUp.modele');


const singUp = async (req, res) => {

    try {
        const response = await singUpModule(req.body)

        const { type, status, message } = response

        if (type && status === 201)
            return res.status(201).json({
                success: true,
                data: message
            })

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
                    }
                })
            if (!message.hasOwnProperty("code"))
                return res.status(400).json({ success: message.hasOwnProperty("code"), error: message.message })

        }
    } catch (error) {
        return res.status(500).json({ success: false, data: error.message })
    }

}






module.exports = singUp