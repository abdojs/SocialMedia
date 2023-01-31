

const emptyReqBody = (body, mes,) => {


    try {
        if (!Object.keys(body).length) {
            throw { message: mes }
        }
    } catch (error) {
        throw error
    }




}


module.exports = emptyReqBody