

const lengthReqBody = (body, mes, number) => {
    try {
        if (Object.keys(body).length !== number) {
            throw { message: mes }
        }
    } catch (error) {
        throw error
    }
}

module.exports = lengthReqBody
