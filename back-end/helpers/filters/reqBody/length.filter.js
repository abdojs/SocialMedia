

const lengthReqBody = (body, mes, number) => {
    try {
        if (Object.keys(body).length !== number) {
            throw { success: false, data: mes }
        }
    } catch (error) {
        throw error
    }
}

module.exports = lengthReqBody
